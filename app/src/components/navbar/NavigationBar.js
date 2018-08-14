import React from "react";
import { Navbar, NavbarBrand } from 'reactstrap';

export default class NavigationBar extends React.Component {

  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">M-Home</NavbarBrand>
      </Navbar>
    );
  }

}
