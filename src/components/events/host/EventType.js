import React, { Component } from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./EventType.scss";

class EventType extends Component {
  render() {
    return (
      <>
        <Row style={{ marginTop: "2rem" }}>
          <Col md={5}>
            <Image
              className='host-img'
              src={
                process.env.PUBLIC_URL + "/register/choose-identity-model.png"
              }
              alt=''
              fluid
            />
          </Col>
          <Col md={2}></Col>
          <Col md={4} className='host-form-1'>
            <h1>Choose Your Event Type</h1>
            <input type='text' placeholder='Event Name' /> <br />
            <label>
              <input type='radio' />
              In-Person
            </label>
            <h4>Event SubType</h4>
            <select name='subtype'>
              <option value='activity'>Activity</option>
              <option value='get together'>Get Together</option>
            </select>
            <h4>Event Categories</h4>
            <input type='text' placeholder='Eg. Environment' />
            <br />
            <hr />
            <button value='Next' type='submit'>
              Next
            </button>
          </Col>
        </Row>
      </>
    );
  }
}

export default EventType;
