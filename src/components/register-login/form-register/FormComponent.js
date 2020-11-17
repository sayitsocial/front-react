import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ImageComponent from "../ImageComponent";
import "../form.scss";
import FormInput from "./FormInputs";
import FormNavigation from "./FormNavigation";
import { connect } from "react-redux";
import IdentitySelection from "./IdentitySelection";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headings: [
        "Welcome,\nChoose your identity",
        "Let's Get Started",
        "You're Onboard :)",
      ],
      subheadings: [
        "Tell Us About You",
        "Tell Us About You",
        "Cheers! Your Account is all Set",
      ],
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
                          {this.state.headings[this.props.formStage]
                            .split("\n")
                            .map((i, key) => {
                              return <div key={key}>{i}</div>;
                            })}
                        </p>
                        <h5 className='subtitle'>
                          {this.state.subheadings[this.props.formStage]}
                        </h5>
                      </div>
                      <div
                        style={{
                          display:
                            this.props.formStage === 0 ? "initial" : "none",
                        }}
                      >
                        <IdentitySelection></IdentitySelection>
                      </div>
                      <div
                        style={{
                          display:
                            this.props.formStage === 1 ? "initial" : "none",
                        }}
                      >
                        <FormInput></FormInput>
                      </div>
                    </Container>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormNavigation
                      style={{
                        "margin-top":
                          this.props.formStage === 2 ? "0rem" : "4rem",
                      }}
                      className='form-navigation'
                    ></FormNavigation>
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

function handleState(state) {
  return {
    formStage: state.registerReducer.registerStage,
  };
}

export default connect(handleState)(FormComponent);
