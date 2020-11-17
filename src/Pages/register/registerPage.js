import React from "react";
import CornerAsthetics from "../../components/register/AstheticsComponent";
import FormComponent from "../../components/register/form/FormComponent";

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
