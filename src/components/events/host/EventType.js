import React, { Component } from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./EventsHost.scss";

class EventType extends Component {
  render() {
    return (
      <>
        <Row>
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
          <Col md={1}></Col>
          <Col style={{marginTop:"2rem"}} md={4} className='host-form-1'>
            <h1 className='heading'>Choose Event Type</h1>
            <div className='allinputs'>
              <input id='eventname' type='text' placeholder='Event Name' />{" "}
              <br />
              <label id='button1' className='mb-4'>
                <input type='radio' />
                <span className='ml-3'>In Person</span>
              </label>
              <h4 className='subtype'>Event SubType</h4>
              <select className='dropdown1' name='subtype'>
                <option value='activity'>Activity</option>
                <option value='get together'>Get Together</option>
              </select>
              <h4 className='catagories'>Event Categories</h4>
              <input id='describe' type='text' placeholder='Eg. Environment' />
              <br />
              <hr />
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default EventType;
