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
            <Route exact path="/" render={()=><Redirect to="/rooms"/>}/>
            <Route exact path="/rooms" component={DashboardPage}/>
            <Route path="/:room" component={RoomPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
