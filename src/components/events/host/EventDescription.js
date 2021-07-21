import React, { Component } from "react";
import {
  Button,
  Col,
  FormControl,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import "./EventsHost.scss";

class EventDescription extends Component {
  render() {
    return (
      <>
        <Row>
          <Col md={5}>
            <Image
              className='description-img'
              src={process.env.PUBLIC_URL + "/register/about-you-model.png"}
              alt=''
              fluid
            />
          </Col>
          <Col md={1}></Col>
          <Col md={4} className='host-form-1'>
            <div style={{ marginTop: "7rem" }}>
              <h2 className='heading-2 mb-5'>Event Description</h2>
              <textarea
                className='p-2 description'
                placeholder='Description'
                rows='5'
                cols='39'
              ></textarea>

              <div className='d-flex'>
                <div>
                  <h5 className='mt-4 mb-3'>Contact Information</h5>
                  <InputGroup className='mb-3 number'>
                    <Button
                      style={{ borderRadius: "4px 0 0 4px" }}
                      variant='dark'
                      value='+91 IND'
                    >
                      +91 IND
                    </Button>
                    <FormControl
                      className='number'
                      aria-describedby='basic-addon1'
                    />
                  </InputGroup>
                </div>
                <div className='mt-4 '>
                  <h5 className='mb-3'> Points</h5>
                  <div className='bg-dark d-flex v-pts'>
                    <Image
                      src={process.env.PUBLIC_URL + "/profile/medal.svg"}
                    />
                    <span className='align-self-center ml-1'>150</span>
                  </div>
                  {/* <FormControl
                    className='pts'
                    id='virtualPoints'
                    type='number'
                  /> */}
                </div>
              </div>
              <br />
              <hr />
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
      </>
    );
  }
}

export default EventDescription;
