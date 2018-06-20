import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: "#18723c",
    color: "#ffffff",
  },
};

const Header = ({classes}) => (
  <AppBar className={classes.root} position="static" color="default">
      <Toolbar>
          <Typography variant="title" color="inherit">
            Casino Lobby
          </Typography>
      </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);