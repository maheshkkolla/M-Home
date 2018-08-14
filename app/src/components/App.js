import React, { Component } from 'react';
import './App.css';
import Navbar from "./navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <Navbar />
      </div>
    );
  }
}

export default App;
