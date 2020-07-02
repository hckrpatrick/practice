import { Modal } from "react-bootstrap";
import React, { Component } from "react";
import LoginForm from "./LoginForm";

export class LoginModal extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handle}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
        {/* <Modal.Footer>
            <Button variant="secondary" onClick={props.handle}>
              Close
            </Button>
            <Button variant="primary" onClick={props.handle}>
              Save Changes
            </Button>
          </Modal.Footer> */}
      </Modal>
    );
  }
}

export default LoginModal;
