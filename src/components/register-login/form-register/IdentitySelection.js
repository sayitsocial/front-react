import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import OrgTypeSelection from "./OrgTypeSelection";
import { modIdentity } from "../../../store/actions";
import { connect } from "react-redux";

class IdentitySelection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      identity: 0,
    };
  }

  handleIdentity(event) {
    this.props.dispatch(modIdentity(event.target.value));
  }
  render() {
    return (
      <div hidden={this.props.hidden}>
        <form id='identity-form'>
          <Row>
            <Col md={12}>
              <Form.Check
                type='radio'
                name='identityRadio'
                label='Individual'
                variant='secondary  '
                value={0}
                onChange={this.handleIdentity.bind(this)}
                defaultChecked
                inline
              ></Form.Check>
              <Form.Check
                type='radio'
                name='identityRadio'
                label='Organisation'
                value={1}
                onChange={this.handleIdentity.bind(this)}
                inline
              ></Form.Check>
            </Col>
            <Col>
              <div
                style={{
                  display: this.props.identity === "1" ? "initial" : "none",
                }}
              >
                <OrgTypeSelection></OrgTypeSelection>
              </div>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

function handleState(state) {
  return {
    identity: state.registerReducer.identity,
  };
}

export default connect(handleState)(IdentitySelection);
