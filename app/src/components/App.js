import React, {Component} from 'react';
import './App.scss';
import NavigationBar from "./navbar/NavigationBar";
import DashboardPage from "./dashboard/DashboardPage";
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import RoomPage from "./room/RoomPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <NavigationBar/>
          <br/>
          <Switch>
            <Route path="/rooms/:room" component={RoomPage}/>
            <Route path="/" component={DashboardPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
