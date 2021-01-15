import React from "react";
import { Form } from "react-bootstrap";
import ButtonPrimary from "../../generic/buttonPrimary";
import "../form.scss";
import axios from "axios";
import { populateUrl } from "../../../constants";

class FormInputs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginData: {
        username: "",
        password: "",
      },
    };
  }

  sendLoginRequest(event) {
    event.preventDefault();

    const loginData = {
      username: event.target.elements.formLoginEmail.value,
      password: event.target.elements.formLoginPassword.value,
    };
    console.log(loginData);
    axios.defaults.withCredentials = true;
    axios
      .post(populateUrl("/auth/login"), {
        loginData,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log("Login: ", err));

    // TODO: Redirect to proper page
  }

  render() {
    return (
      <>
        <Form onSubmit={this.sendLoginRequest.bind(this)}>
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
