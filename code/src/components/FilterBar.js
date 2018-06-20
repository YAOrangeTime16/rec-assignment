import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
  root: {
    flexGrow: 1,
    position: 'relative',
    top: 1
  },
};

class FilterBar extends Component {
  state = {
    value: 0,
  };

  _handleChange = (event, value) => {
    this.setState({ value });
  };

  render(){
    const { classes, filter } = this.props;
    return(
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this._handleChange}
          indicatorColor="primary"
          fullWidth
        >
          <Tab label="All" onClick={filter} />
          <Tab label="Slots" onClick={()=>filter('slots')}/>
          <Tab label="Table" onClick={()=>filter('table-games')}/>
        </Tabs>
      </Paper>
    )
  }
}

export default withStyles(styles)(FilterBar);