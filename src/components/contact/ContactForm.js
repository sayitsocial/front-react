import React, { Component } from "react";
import { Form } from "react-bootstrap";
import "./contactform.scss";

class ContactForm extends Component {
  render() {
    return (
      <>
        <div className='contact-main'>
          <h2>Write to us, </h2>
          <div className='form'>
            <Form className='form'>
              <Form.Group className='abc'>
                <Form.Control size='lg' type='text' placeholder='Full name' />
              </Form.Group>
              <Form.Group className='abc'>
                <Form.Control
                  controlId='formBasicEmail'
                  size='lg'
                  type='email'
                  placeholder='Email'
                />
              </Form.Group>
              <Form.Group className='abc'>
                <Form.Control size='lg' type='number' placeholder='Phone' />
              </Form.Group>
              <Form.Group
                controlId='exampleForm.ControlTextarea1'
                className='abc'
              >
                <Form.Control
                  as='textarea'
                  rows={5}
                  placeholder='Your message here'
                />
              </Form.Group>
            </Form>
          </div>
          <div className='details'>
            <div>
              <h3> Contact </h3>
              <h4> +1 (415) 359 456 9 </h4>
              <br />
            </div>
            <div>
              <h3> Email </h3>
              <h4> contact@sayitsocial.co </h4>
              <br />
            </div>
            <div>
              <h3> Follow us on </h3>
              <h4> </h4>
            </div>
          </div>
          <div className='lady'>
            <img
              src={process.env.PUBLIC_URL + "/contact/03.png"}
              alt='lady'
              width='500px'
              height='900px'
            ></img>
          </div>
        </div>
      </>
    );
  }
}

export default ContactForm;
