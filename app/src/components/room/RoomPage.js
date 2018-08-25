import React from "react";
import Device from "./Device";
import {Jumbotron, Container, Row} from "reactstrap";

export default class RoomPage extends React.Component {

  constructor() {
    super();
    this.state = {show: false};
    this.onDeviceToggle = this.onDeviceToggle.bind(this);
    this.onFetchSuccess = this.onFetchSuccess.bind(this);
    this.setData = this.setData.bind(this);
    this.onDeviceTogglePostSuccess = this.onDeviceTogglePostSuccess.bind(this);
  }

  componentDidMount() {
    fetch(`/rooms/${this.props.match.params.roomId}`).then(this.onFetchSuccess);
  }

  onFetchSuccess(response) {
    response.json().then(this.setData)
  }

  setData(data) {
    this.setState(data);
    this.setState({show: true});
  }

  onDeviceTogglePostSuccess(response) {
    window.location.reload();
  }

  onDeviceToggle(details) {
    fetch("/activities/new", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(this.onDeviceTogglePostSuccess)
  }

  render() {
    if (this.state.show) {
      return (
        <Container>
          <Jumbotron className="text-center">
            <h1> {this.state.name} </h1>
            <h3> {this.state.description || ""} </h3>
          </Jumbotron>
          <Row>
            {this.state.devices.map((device) => <Device {...device} onToggle={this.onDeviceToggle}/>)}
          </Row>
        </Container>
      );
    } else {
      return (
        <Container>
          Loading...
        </Container>
      );
    }

  }
}