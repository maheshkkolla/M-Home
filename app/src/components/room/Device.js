import React from "react";
import {
  Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle
} from 'reactstrap';
import Toggle from "react-bootstrap-toggle";


export default class Device extends React.Component {

  constructor() {
    super();
    this.state = {toggleActive: false};
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    this.setState({toggleActive: !this.state.toggleActive});
  }

  render() {
    return (
      <Col md={4}>
        <Card>
          <CardBody>
            <CardTitle>
              {this.props.name}
              <div className="float-right">
                <Toggle
                  onClick={this.onToggle}
                  size="xs"
                  offstyle="danger"
                  active={this.state.toggleActive}
                />
              </div>
            </CardTitle>
            <CardSubtitle> {this.props.description || ""} </CardSubtitle>
          </CardBody>
        </Card>
      </Col>
    );
  }
}