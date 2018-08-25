import React from "react";
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


export default class RoomModal extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };

    this.close = this.close.bind(this);
    this.save = this.save.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      show: nextProps.show
    });
  }

  close() {
    this.setState({
      show: false
    });
    this.props.onClose && this.props.onClose();
  }

  save() {
    this.props.onSave && this.props.onSave();
    this.close();
  }

  render() {
    return (
      <Modal isOpen={this.state.show} toggle={this.toggle}>
        <Form>
          <ModalHeader toggle={this.toggle}> Add new room </ModalHeader>
          <ModalBody>
            <Input type="hidden" name="id" value={this.props.id}/>
            <FormGroup>
              <Label>Name</Label>
              <Input type="text" name="name" placeholder="Name of the room" value={this.props.name}/>
            </FormGroup>
            <FormGroup>
              <Label>Unique Key</Label>
              <Input type="text" name="routing_key" placeholder="Key to identify the room uniquely"
                     value={this.props.routing_key}/>
            </FormGroup>
            <FormGroup>
              <Label>Image URL</Label>
              <Input type="text" name="image_path" placeholder="URL of the room image to display"
                     value={this.props.image_path}/>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.save}> Save </Button>
            <Button color="secondary" onClick={this.close}> Cancel </Button>
          </ModalFooter>
        </Form>
      </Modal>
    );
  }
}