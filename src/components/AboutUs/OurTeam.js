import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import TeamCard from "./TeamCard";
import "./AboutUs.scss";

class OurTeam extends Component {
  render() {
    return (
      <>
        <h3 className='ourteam-heading'>Our Team</h3>
        <Row className='ourteam-row'>
          <Col>
            <TeamCard />
          </Col>
          <Col>
            <TeamCard />
          </Col>
          <Col>
            <TeamCard />
          </Col>
          <Col>
            <TeamCard />
          </Col>
        </Row>
        <Row className='ourteam-row'>
          <Col>
            <TeamCard />
          </Col>
          <Col>
            <TeamCard />
          </Col>
          <Col>
            <TeamCard />
          </Col>
          <Col>
            <TeamCard />
          </Col>
        </Row>
      </>
    );
  }
}

export default OurTeam;
