import React from "react";
import Device from "./Device";
import {Jumbotron, Container, Row, Col} from "reactstrap";

export default class RoomPage extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "My-Room",
      devices: [{ name: "Light", status: true}, {name: "Fan", status: false}]
    };
  }

  componentDidMount() {
    // fetch()
    // {this.props.match.params.room}
  }

  render() {
    return (
      <Container>
        <Jumbotron className="text-center">
          <h1> {this.state.name} </h1>
          <h3> {this.state.description || ""} </h3>
        </Jumbotron>
        <Row>
          {this.state.devices.map((device) => <Device {...device}/>)}
        </Row>
      </Container>
    );
  }
}