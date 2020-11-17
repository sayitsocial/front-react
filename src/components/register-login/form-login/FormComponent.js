import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ImageComponent from "../ImageComponent";
import "../form.scss";
import FormInputs from "./FormInputs";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headings: "Hello!\nNice to see you again!",
      subheadings: "Please Login to Continue",
    };
  }
  render() {
    return (
      <>
        <div className='signup-bottom'>
          <Row>
            <Col className='d-flex' md={5}>
              <ImageComponent src='/register/choose-identity-model.png'></ImageComponent>
            </Col>
            <Col md={{ span: 6, offset: 1 }} className='d-flex'>
              <Container className='my-auto'>
                <Row>
                  <Col>
                    <Container>
                      <div className='form-heading'>
                        <p className='display-4 m-0 title'>
                          {this.state.headings.split("\n").map((i, key) => {
                            return <div key={key}>{i}</div>;
                          })}
                        </p>
                        <h5 className='subtitle'>{this.state.subheadings}</h5>
                      </div>
                    </Container>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Container>
                      <FormInputs></FormInputs>
                    </Container>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default FormComponent;
