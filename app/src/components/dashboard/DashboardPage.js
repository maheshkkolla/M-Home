import React from "react";
import RoomCard from "./RoomCard";
import {Container, Row, Col} from "reactstrap";

export default class DashboardPage extends React.Component {
  constructor() {
    super();
    this.state = {
      rooms: [
        {name: "My-Room", description: "Description here"},
        {name: "Some other room", description: "Description here"}
      ]
    };
  }

  componentDidMount() {
    // fetch("/rooms")
    //   .then();
  }

  render() {
    return(
      <Container>
        <Row>
          { this.state.rooms.map((room) => <RoomCard key={room.name} {...room} />) }
        </Row>
      </Container>
    );
  }
}