import React, { Component } from 'react';
import FilterBar from './FilterBar';
import FilterByProviderBar from './FilterByProviderBar';
import Tile from './Tile';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    minWidth: 300,
    width: '100%',
  },
}

class Lobby extends Component {

  state={
    allGames: [],
    filteredGames: [],
    providers: []
  }
  
  componentDidMount(){
    this.getAllGames()
  }

  _filterByCollections = (collectionId = 'allgames') => {
    const { allGames } = this.state;
    const filteredGames = allGames.filter( game => game.gameCollectionIds && game.gameCollectionIds.includes(collectionId));
    this.setState({filteredGames})
  }

  _filterByProvider = (providerName) => {
    const { allGames, filteredGames } = this.state;
    const arrayToUse = (filteredGames.length !== 0) ? filteredGames : allGames;
    const filteredByProvider = arrayToUse.filter( game => game.gameProvider === providerName );
    this.setState({filteredGames: filteredByProvider});
  }

  getAllGames = () => {
    fetch('http://localhost:3000/games')
    .then(res => res.json())
    .then(games => {
      let gamesArray = [];
      let gamesObj = {};
      let providerSet = new Set();
      //pick up games with the collectionId of "allgames"
      const allGames = games.filter( game => game.gameCollectionIds && game.gameCollectionIds.includes('allgames'));
      allGames.map(game => {
        //pick up only necessary properties
        gamesArray.push(Object.assign({}, {...gamesObj}, {
        id: game.id,
        gameProvider: game.gameProvider,
        gameCollectionIds: game.gameCollectionIds,
        name: game.name,
        themeUrl: game.thumbnailUrl || game.themeUrl,
        description: game.description
        }))
        return providerSet.add(game.gameProvider);
      }
    );
      let providers = Array.from(providerSet);
        this.setState({allGames: gamesArray, filteredGames: gamesArray, providers});
    })
  }

  render(){
    const { classes } = this.props;
    return(
      <div styles={classes.root}>
        <FilterBar filter={this._filterByCollections}/>
        <FilterByProviderBar 
          providerList={ this.state.providers }
          filterByProvider={this._filterByProvider}
        />
        <Tile {...this.state}/>
      </div>
    )
  }
};

export default withStyles(styles)(Lobby);