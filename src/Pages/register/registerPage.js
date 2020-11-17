import React from "react";
import CornerAsthetics from "../../components/register-login/CornerAesthetics";
import FormComponent from "../../components/register-login/form-register/FormComponent";

class RegisterPage extends React.Component {
  render() {
    return (
      <>
        <CornerAsthetics></CornerAsthetics>
        <FormComponent></FormComponent>
      </>
    );
  }
}

export default RegisterPage;
