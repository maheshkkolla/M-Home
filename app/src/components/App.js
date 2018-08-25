import React, {Component} from 'react';
import './App.scss';
import NavigationBar from "./navbar/NavigationBar";
import DashboardPage from "./dashboard/DashboardPage";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import RoomPage from "./room/RoomPage";
import "react-bootstrap-switch/dist/css/bootstrap3/react-bootstrap-switch.min.css";

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
            <Route path="/rooms/:roomId" component={RoomPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
