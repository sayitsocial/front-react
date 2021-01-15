import React from "react";
import { Row, Col } from "react-bootstrap";
import ButtonPrimary from "../../generic/buttonPrimary";
import ButtonLight from "../../generic/buttonLight";
import { connect } from "react-redux";
import { incRegisterStage, decRegisterStage } from "../../../store/actions";
import Axios from "axios";
import { populateUrl } from "../../../constants";

class FormNavigation extends React.Component {
  submitForm() {
    console.log(this.props.registerData);
    if (this.props.identity === "1") {
      // TODO: Accept location for orgs
      // TODO: Accept owner data for orgs
      // TODO: Handle errors
      Axios.post(populateUrl("/api/org/create"), {
        email: this.props.registerData.email,
        password: this.props.registerData.password,
        org_name: this.props.registerData.orgname,
        org_type: this.props.registerData.orgtype,
        owner: "dummy owner",
        location: [1.1, 2.2],
      }).then((resp) => {
        console.log(resp);
      });
    } else {
      Axios.post(populateUrl("/api/vol/create"), {
        email: this.props.registerData.email,
        password: this.props.registerData.password,
        first_name: this.props.registerData.firstname,
        last_name: this.props.registerData.lastname,
      }).then((resp) => {
        console.log(resp);
      });
    }

    // TODO: Validation of form
    // TODO: Redirect to proper page if no errors
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
    identity: state.registerReducer.identity,
    formStage: state.registerReducer.registerStage,
    registerData: state.registerReducer.registerData,
  };
}

export default connect(handleState)(FormNavigation);
