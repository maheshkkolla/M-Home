import React from "react";
import {Navbar} from "react-bootstrap";

export default class NavBar extends React.Component {
  render() {
    return (
      <NavBar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">M-Home</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </NavBar>
    );
  }

}
