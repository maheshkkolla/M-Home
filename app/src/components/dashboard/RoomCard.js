import React from "react";
import {Col, Card, CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {Link} from "react-router-dom";


export default class RoomCard extends React.Component {
  render() {
    return (
      <Col md={6}>
        <Link to={`/rooms/${this.props.id}`}>
          <Card>
            {/*<CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap"/> */}
            <CardBody>
              <CardTitle>{this.props.name}</CardTitle>
              <CardSubtitle>{this.props.description || ""}</CardSubtitle>
            </CardBody>
          </Card>
        </Link>
      </Col>
    );
  }
}