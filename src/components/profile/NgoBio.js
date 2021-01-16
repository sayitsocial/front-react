import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Col, Row } from "react-bootstrap";
import "../../components/profile/profile.scss";

class NgoBio extends Component {
  render() {
    return (
      <>
        <div className='ngo-bio'>
          <Jumbotron className='profile-jumbotron'>
            <Row>
              <Col lg={5} md={12}>
                <h3>Bio</h3>
                <p>
                  Child in Need India, is an international humanitarian
                  organisation aimed at promoting "sustainable development in
                  health, nutrition and education of child, adolescent and woman
                  in need" in India.
                </p>
              </Col>
              <Col lg={1}></Col>
              <Col lg={5} md={12}>
                <h3>Contact</h3>
                <p>
                  +451 6565 896 896 <br />
                  mail@email.com
                </p>
              </Col>
            </Row>
          </Jumbotron>
        </div>
      </>
    );
  }
}

export default NgoBio;
