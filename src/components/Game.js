import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    minWidth: 300,
    width: '100%',
    height: '95vh',
    backgroundColor: '#000000',
  },
  title: {
    color: '#ffffff',
    textAlign: 'center',
    margin: 0,
    lineHeight: 10
  },
  close: {
    color: '#ffffff',
    cursor: 'pointer'
  }
};

const Game = ({classes, closeGame}) => (
  <Zoom in>
    <div className={classes.root}>
      <span className={classes.close} onClick={closeGame}>X</span>
      <h1 className={classes.title}> Game </h1>
    </div>
  </Zoom>
);

export default withStyles(styles)(Game);