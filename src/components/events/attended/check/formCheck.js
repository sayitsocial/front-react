import React, { Component } from "react";
import { Badge, Form } from "react-bootstrap";

class FormCheck extends Component {
  render() {
    return (
      <>
        <h6 className='checkbox-title'>{this.props.options.heading}</h6>
        {this.props.options.data.map((value1, index) => (
          <Form.Group key={index}>
            <Form.Label className='d-flex'>
              <Form.Check type='checkbox'></Form.Check>
              {value1}
              <Badge className='check-badge' variant='dark'>
                5
              </Badge>
            </Form.Label>
          </Form.Group>
        ))}
      </>
    );
  }
}

export default FormCheck;
