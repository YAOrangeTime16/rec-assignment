import React, { Component } from 'react';
import Header from './components/Header';
import Lobby from './components/Lobby';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Lobby />
      </div>
    );
  }
}

export default App;
