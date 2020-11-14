import React from "react";
import { Form } from "react-bootstrap";
import { addRegisterData } from "../../../store/actions";

import { connect } from "react-redux";

class FormInput extends React.Component {
  updateData = (event) => {
    this.props.dispatch(addRegisterData(event.target.id, event.target.value));
  };
  render() {
    return (
      <div hidden={this.props.hidden}>
        <Form id="second-form-group">
          <div
            className={
              (this.props.identity === "1" ? "d-none" : "d-flex") +
              " justify-content-between"
            }
          >
            <Form.Group>
              <Form.Control
                id="firstname"
                size="lg"
                type="text"
                placeholder="First Name"
                onChange={this.updateData}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Control
                id="lastname"
                size="lg"
                type="text"
                placeholder="Last Name"
                onChange={this.updateData}
              ></Form.Control>
            </Form.Group>
          </div>
          <div
            style={{
              display: this.props.identity === "0" ? "none" : "initial",
            }}
          >
            <Form.Group>
              <Form.Control
                id="orgname"
                size="lg"
                type="text"
                placeholder="Name of organisation"
                onChange={this.updateData}
              ></Form.Control>
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Control
                id="email"
                size="lg"
                type="email"
                placeholder="Email"
                onChange={this.updateData}
              ></Form.Control>
            </Form.Group>
          </div>
          <div className="password-container">
            <Form.Group>
              <Form.Control
                id="password"
                size="lg"
                type="password"
                placeholder="Password"
                onChange={this.updateData}
              ></Form.Control>
            </Form.Group>
          </div>
        </Form>
      </div>
    );
  }
}

function handleState(state) {
  return {
    identity: state.registerReducer.identity,
  };
}

export default connect(handleState)(FormInput);
