import React, { Component } from 'react';
import './App.scss';
import NavigationBar from "./navbar/NavigationBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <NavigationBar />
      </div>
    );
  }
}

export default App;
