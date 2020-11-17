import React from "react";
import { Row, Col } from "react-bootstrap";
import ButtonPrimary from "../../generic/buttonPrimary";
import ButtonLight from "../../generic/buttonLight";
import { connect } from "react-redux";

import { incRegisterStage, decRegisterStage } from "../../../store/actions";

class FormNavigation extends React.Component {
  submitForm() {
    console.log(this.props.registerData);
  }

  incrementStage = () => {
    if (this.props.formStage < 2) {
      this.props.dispatch(incRegisterStage());
    } else {
      this.submitForm();
    }
  };

  decrementStage = () => {
    if (this.props.formStage > 0) {
      this.props.dispatch(decRegisterStage());
    }
  };

  render() {
    return (
      <div className={this.props.className} style={this.props.style}>
        <Row className='navigation-button-group'>
          <Col className='d-flex justify-content-between' md={12}>
            <ButtonLight
              style={{
                visibility: this.props.formStage === 0 ? "hidden" : "visible",
              }}
              label='Back'
              onClick={this.decrementStage}
            ></ButtonLight>
            <ButtonPrimary
              label={this.props.formStage === 2 ? "Submit" : "Next"}
              onClick={this.incrementStage}
            ></ButtonPrimary>
          </Col>
        </Row>
      </div>
    );
  }
}

function handleState(state) {
  return {
    formStage: state.registerReducer.registerStage,
    registerData: state.registerReducer.registerData,
  };
}

export default connect(handleState)(FormNavigation);
