import React from "react";
import NavbarRegister from "../../components/register/NavbarComponent";
import CornerAsthetics from "../../components/register/AstheticsComponent";
import FormComponent from "../../components/register/form/FormComponent";

class RegisterPage extends React.Component {
  render() {
    return (
      <>
        <CornerAsthetics></CornerAsthetics>
        <NavbarRegister></NavbarRegister>
        <FormComponent></FormComponent>
      </>
    );
  }
}

export default RegisterPage;
