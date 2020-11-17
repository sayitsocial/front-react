import React from "react";
import { Form } from "react-bootstrap";
import ButtonPrimary from "../../generic/buttonPrimary";
import "../form.scss";

class FormInputs extends React.Component {
  render() {
    return (
      <>
        <Form>
          <Form.Group controlId='formLoginEmail'>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>

          <Form.Group controlId='formLoginPassword'>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <ButtonPrimary
            className='login-submit'
            type='submit'
            label="Let's Go"
          ></ButtonPrimary>
        </Form>
      </>
    );
  }
}

export default FormInputs;
