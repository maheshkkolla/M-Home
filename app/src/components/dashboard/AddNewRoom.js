import React from "react";
import {Col, Button, Card, CardBody} from 'reactstrap';
import RoomModal from "./RoomModal";


export default class AddNewRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
    this.add = this.add.bind(this);
  }

  show() {
    this.setState({
      show: true
    });
  }

  close() {
    this.setState({
      show: false
    });
  }

  add() {

  }

  render() {
    return (
      <Col md="6" className="room add-new-room">
        <Card>
          <CardBody>
            <Button color="primary" onClick={this.show}> Add new room </Button>
          </CardBody>
        </Card>

        <RoomModal show={this.state.show}
                   onClose={this.close}
                   onSave={this.add}
        />
      </Col>
    );
  }
}