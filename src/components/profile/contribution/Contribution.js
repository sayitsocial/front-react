import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Col, Row } from "react-bootstrap";
import "../../../components/profile/profile.scss";
import PieChart from "../contribution/PieChart";
import Choices from "../contribution/Choices";

class Contribution extends Component {
  render() {
    return (
      <>
        <div className='contribution'>
          <Jumbotron className='profile-jumbotron'>
            <Row>
              <Col md={6}>{/* <PieChart /> */}</Col>
              <Col md={6}>
                <Choices />
              </Col>
            </Row>
          </Jumbotron>
        </div>
      </>
    );
  }
}

export default Contribution;
