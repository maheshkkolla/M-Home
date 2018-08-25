import React from "react";
import RoomCard from "./RoomCard";
import {Container, Row} from "reactstrap";
import AddNewRoom from "./AddNewRoom";
import "./dashboard.scss";
import "whatwg-fetch";

export default class DashboardPage extends React.Component {
  constructor() {
    super();
    this.state = { rooms: [] };
    this.onFetchSuccess = this.onFetchSuccess.bind(this);
    this.setData = this.setData.bind(this);
  }

  setData(data) {
    this.setState({rooms: data});
  }

  componentDidMount() {
    fetch("/rooms").then(this.onFetchSuccess);
  }

  onFetchSuccess(response) {
    response.json().then(this.setData)
  }

  render() {
    return(
      <Container>
        <Row className="rooms">
          { this.state.rooms.map((room) => <RoomCard key={room.routing_key} {...room} />) }
          <AddNewRoom />
        </Row>
      </Container>
    );
  }
}