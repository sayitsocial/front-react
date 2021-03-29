import React, { Component } from "react";
import "./EventType.scss";
import { Button, Col, Form, Image, Row } from "react-bootstrap";

class UploadImage extends Component {
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
        </Row>
      </>
    );
  }
}

export default UploadImage;
