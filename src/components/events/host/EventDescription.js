import React, { Component } from "react";
import {
  Col,
  Dropdown,
  DropdownButton,
  Form,
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
        <Row style={{ marginTop: "2rem" }}>
          <Col md={6}>
            <Image
              className='description-img'
              src={process.env.PUBLIC_URL + "/register/about-you-model.png"}
              alt=''
              fluid
            />
          </Col>
          <Col md={1}></Col>
          <Col md={4} className='host-form-1'>
            <div>
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
                    <DropdownButton
                      as={InputGroup.Prepend}
                      title='+91 IND'
                      variant='dark'
                      id='input-group-dropdown-1'
                    >
                      <Dropdown.Item href='#'>India</Dropdown.Item>
                      <Dropdown.Item href='#'>Australia</Dropdown.Item>
                      <Dropdown.Item href='#'>Spain</Dropdown.Item>
                      <Dropdown.Item href='#'>Germany</Dropdown.Item>
                    </DropdownButton>
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
              <div className='d-flex justify-content-between'>
                <button
                  className='btn bg-light back btn-light'
                  value='Back'
                  type='submit'
                >
                  Back
                </button>
                <button
                  className='next btn btn-danger'
                  value='Next'
                  type='submit'
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

export default EventDescription;
