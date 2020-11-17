import React, { Component } from "react";
import { Container } from "react-bootstrap";
import FormCheck from "./formCheck";

class CheckBoxes extends Component {
  render() {
    return (
      <>
        <Container>
          <h6 className='checkbox-title'>In-Person</h6>
          <FormCheck />
        </Container>
      </>
    );
  }
}

export default CheckBoxes;
