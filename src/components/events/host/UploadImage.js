import React, { Component } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import "./EventsHost.scss";

class UploadImage extends Component {
  render() {
    return (
      <>
        <Row>
          <Col md={5}>
            <Image
              className='upload-img'
              src={process.env.PUBLIC_URL + "/register/about-you-model.png"}
              alt=''
              fluid
            />
          </Col>
          <Col md={1}></Col>
          <Col md={4} style={{marginTop:"2rem"}}>
            <h2 className='heading-2 img-heading'>Upload Image</h2>
            <Form>
              <Form.Group className='uploadImage text-center'>
                <label className='main-upload'>
                  <Image
                    className='upload-thumbnail mb-3'
                    src={process.env.PUBLIC_URL + "/event/upload.svg"}
                    fluid
                  />
                  <br />
                  <span className='h5 mb-3'>Upload Event Thumbnail</span>
                  <br />
                  <Form.File className='mt-3 mb-2' id='upload-image' />
                </label>
              </Form.Group>
              <hr style={{marginTop:"3.75rem"}} />
              <Form.Group></Form.Group>
            </Form>
          </Col>
          <Col md={1}></Col>
        </Row>
      </>
    );
  }
}

export default UploadImage;
