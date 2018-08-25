import React from "react";
import {
  Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle
} from 'reactstrap';
import Toggle from "react-bootstrap-toggle";


export default class Device extends React.Component {

  constructor() {
    super();
    this.state = {status: false};
    this.onToggle = this.onToggle.bind(this);
    this.setStatusOnPropsChange = this.setStatusOnPropsChange.bind(this);
  }

  componentWillMount() {
    this.setStatusOnPropsChange(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setStatusOnPropsChange(nextProps);
  }

  setStatusOnPropsChange(props) {
    this.setState({
      status: (props.recent_activity ? props.recent_activity.action === "ON" : false)
    });
  }

  onToggle() {
    this.props.onToggle({ id: this.props.id, action: !this.state.status});
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
                  active={this.state.status}
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