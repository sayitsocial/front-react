import React, { Component } from "react";
import EventType from "../../../components/events/host/EventType";
import EventDescription from "../../../components/events/host/EventDescription";
import UploadImage from "../../../components/events/host/UploadImage";
import {
  Col,
  Image,
  Row,
} from "react-bootstrap";

class Host extends Component {
  state = {
    count: 0
  };

  incrementPage = () => {
    this.setState(prev => ({
      count: (prev.count === 2) ? prev.count : prev.count + 1
    }))
  }

  decrementPage = () => {
    this.setState(prev => ({
      count: (prev.count === 0) ? prev.count : prev.count - 1
    }))
  }

  renderPage = () => {
    switch (this.state.count) {
      default:
      case 0:
        return <EventType />
      case 1:
        return <EventDescription />
      case 2:
        return <UploadImage />
    }
  }
  render () {
    return (
      <>
        <Row style={{ marginTop: "2rem" }}>
          <Col className='host-form-1'>
            <div>
              <div>
                {this.renderPage()}
              </div>

              <div className='d-flex justify-content-between'>
                <button
                  className='btn bg-light back btn-light'
                  value='Back'
                  type='submit'
                  onClick={this.decrementPage}
                >
                  Back
                </button>
                <button
                  className='next btn btn-danger'
                  value='Next'
                  type='submit'
                  onClick={this.incrementPage}
                >
                  Next
                </button>
              </div>
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
      </>
    );
  }
}

export default Host;
