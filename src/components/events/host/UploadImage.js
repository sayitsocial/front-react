import React, { Component } from "react";
import "./EventsHost.scss";
import { Button, Col, Form, Image, Row } from "react-bootstrap";

class UploadImage extends Component {
  render() {
    return (
      <>
        <Row style={{ marginTop: "2rem" }}>
          <Col md={6}>
            <Image
              className='upload-img'
              src={process.env.PUBLIC_URL + "/register/about-you-model.png"}
              alt=''
              fluid
            />
          </Col>
          <Col md={1}></Col>
          <Col md={4}>
            <h1>Upload Image</h1>
            <Form>
              <Form.Group>
                <Form.File id='exampleFormControlFile1' label='' />
                <hr />
                <Button as='input' type='button' value='Input' />
                <Button as='input' type='submit' value='Submit' />
              </Form.Group>
            </Form>
          </Col>
          <Col md={1}></Col>
        </Row>
      </>
    );
  }
}

export default UploadImage;
