import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 100,
    [theme.breakpoints.up('lg')]: {
      minWidth: 200,
    }
  },
});

class FilterByProviderBar extends Component {
  state = {
    provider: '',
    open: false,
  };

  _handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.filterByProvider(event.target.value);
  };

  _handleClose = () => this.setState({open: false})

  _handleOpen = () => this.setState({ open: true });

  _resetProvider = () => this.setState({provider: ''});

  _renderProvidersList = () => {
    const { providerList } = this.props;
    return providerList.map( (provider, index) => (
      <MenuItem
        key={index}
        value={provider}
      >
        {provider}
      </MenuItem>
    ))
  }

  render() {
    const { classes } = this.props;
    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select" style={{height: 50}}>Provider</InputLabel>
          <Select
            open={this.state.open}
            onClose={this._handleClose}
            onOpen={this._handleOpen}
            value={this.state.provider}
            onChange={this._handleChange}
            inputProps={{
              name: 'provider',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value="All">
              <em>All</em>
            </MenuItem>
            {this._renderProvidersList()}
          </Select>
        </FormControl>
      </form>
    );
  }
}


export default withStyles(styles)(FilterByProviderBar);