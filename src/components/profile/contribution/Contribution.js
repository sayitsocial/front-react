import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Col, Row } from "react-bootstrap";
import "../../../components/profile/profile.scss";
import PieGraph from "./PieGraph";
import Choices from "../contribution/Choices";

class Contribution extends Component {
  render() {
    return (
      <>
        <div>
          <Jumbotron className='profile-jumbotron contribution'>
            <Row>
              <Col md={6}>
                <PieGraph />
              </Col>
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
