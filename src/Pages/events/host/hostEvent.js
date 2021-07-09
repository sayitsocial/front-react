import React, { Component } from "react";
import EventType from "../../../components/events/host/EventType";
import EventDescription from "../../../components/events/host/EventDescription";
import UploadImage from "../../../components/events/host/UploadImage";
import { Col, Image, Row } from "react-bootstrap";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { getSuggestedQuery } from "@testing-library/react";

class Host extends Component {
  state = {
    count: 0,
  };

  incrementPage = () => {
    this.setState((prev) => ({
      count: prev.count === 2 ? prev.count : prev.count + 1,
    }));
  };

  decrementPage = () => {
    this.setState((prev) => ({
      count: prev.count === 0 ? prev.count : prev.count - 1,
    }));
  };


  renderPage = () => {
    switch (this.state.count) {
      default:
      case 0:
        return <EventType />;
      case 1:
        return <EventDescription />;
      case 2:
        return <UploadImage />;
    }
  };

  
  render() {
    const steps = [
      "EVENT TYPE",
      "CHOOSE DATE",
      "EVENT DETAILS",
      "UPLOAD IMAGE"
    ];

    return (
      <>
        <div className="stepper-wrapper">
          <Stepper style={{backgroundColor:"whitesmoke"}} activeStep={this.state.count} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
          </Stepper>
        </div>
        <Row>
          <Col className='host-form-1'>
            <div className='host-form-wrapper'>
              <div>{this.renderPage()}</div>
              <div className='container-buttons'>
                <button
                  className='btn bg-light btn-light'
                  value='Back'
                  type='submit'
                  onClick={this.decrementPage}
                >
                  Back
                </button>
                <button
                  className='btn btn-danger'
                  value='Next'
                  type='submit'
                  onClick={this.incrementPage}
                >
                  Next
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default Host;
