import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: '1%',
    [theme.breakpoints.up('md')]: {
      padding: 0,
      paddingTop: 24,
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  image: {
    position: 'relative',
    height: 150,
    width: '48%',
    margin: '1%',
    boxSizing: 'border-box',
    [theme.breakpoints.up('sm')]: {
      width: '32%',
      height: 200,
      margin: '0 0 1% 1%'
      
    },
    [theme.breakpoints.up('md')]: {
      width: '23%',
      margin: '0 1% 2% 1%'
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.6,
      },
      '& $imagePlay' : {
        opacity: 1
      }
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '70%',
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
    color: theme.palette.common.white,
    backgroundColor: `rgba(24, 114, 60, 0.5)`,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    [theme.breakpoints.up('sm')]: {
      top: '80%',
      height: '20%',
    }
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    borderRadius: 5,
    backgroundColor: '#18723c'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.1,
    transition: theme.transitions.create('opacity'),
    borderRadius: 5,
  },
  imageTitle: {
    position: 'relative',
    fontSize: 14,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit}px ${theme.spacing.unit + 6}px`,
  },
  imagePlay: {
    position: 'relative',
    opacity: 0,
    color: '#ffffff',
    fontWeight: 600,
    border: '3px solid #ffffff',
    borderRadius: 5,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
});

class Tile extends Component {
  render(){
    const { classes, allGames, filteredGames } = this.props;
    const gameToRender = filteredGames.length !==0 ? filteredGames : allGames;
    return (
      <div className={classes.root}>
      
      { 
        gameToRender.slice(0, 96).map(game => (
          <Grow in style={{ transformOrigin: '0 0 100%' }} key={game.id}>
          <ButtonBase
            focusRipple
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${game.themeUrl})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <Typography
                component="span"
                variant="button"
                color="inherit"
                className={classes.imagePlay}
              >
                play
              </Typography>
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subheading"
                color="inherit"
                className={classes.imageTitle}
              >
                {game.name}
              </Typography>
            </span>
          </ButtonBase>
          </Grow>
      ))}
      
      </div>
    )
  }
};

export default withStyles(styles)(Tile);