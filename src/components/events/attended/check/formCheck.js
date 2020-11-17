import React, { Component } from "react";
import { Badge, Form } from "react-bootstrap";

class FormCheck extends Component {
  render() {
    return (
      <>
        <Form.Group>
          <Form.Label className='d-flex'>
            <Form.Check type='checkbox'></Form.Check>
            Get Together
            <Badge className='check-badge' variant='dark'>
              5
            </Badge>
          </Form.Label>
        </Form.Group>
      </>
    );
  }
}

export default FormCheck;
