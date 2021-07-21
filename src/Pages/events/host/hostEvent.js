import React, { Component } from "react";
import EventType from "../../../components/events/host/EventType";
import EventDescription from "../../../components/events/host/EventDescription";
import UploadImage from "../../../components/events/host/UploadImage";
import { Col, Row } from "react-bootstrap";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import ChooseDate from "../../../components/events/host/ChooseDate";
import {Modal} from "react-bootstrap";

class Host extends Component {
  state = {
    count: 0,
    show:false
  };

  setShow = (bvalue) => {
    this.setState({
      show: bvalue
    })
  }

  incrementPage = () => {
    this.setState((prev) => ({
      count: prev.count === 3 ? prev.count : prev.count + 1,
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
        return <ChooseDate />;
      case 2:
        return <EventDescription />;
      case 3:
        return <UploadImage />;
    }
  };

  render() {
    const steps = [
      "EVENT TYPE",
      "CHOOSE DATE",
      "EVENT DETAILS",
      "UPLOAD IMAGE",
    ];

    let buttonContainerStyle = this.state.count === 0 ? { right : "25%" } : { right : "18%"};

    return (
      <>
        <div className='stepper-wrapper'>
          <Stepper
            style={{ backgroundColor: "whitesmoke" }}
            activeStep={this.state.count}
            alternativeLabel
          >
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
              <div className='container-buttons' style={buttonContainerStyle}>
                {this.state.count !== 0 ? <button
                  className='btn bg-light btn-light backBtn'
                  value='Back'
                  type='submit'
                  onClick={this.decrementPage}
                >
                  Back
                </button> : null}
                <button
                  className='btn btn-danger'
                  value='Next'
                  type='submit'
                  onClick={this.state.count === 3 ? () => this.setShow(true) : this.incrementPage}
                >
                  {this.state.count === 3 ? "Submit" : "Next"}
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <Modal
          show={this.state.show}
          onHide={() => this.setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Confirm your event details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Form Data
            </p>
          </Modal.Body>
      </Modal>
      </>
    );
  }
}

export default Host;
