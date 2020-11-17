import React, { Component } from "react";
import Tabs from "../../../components/events/attended/tabs";
import CheckBoxes from "../../../components/events/attended/check/check";
import { Col, Row, Container } from "react-bootstrap";
import "../../../components/events/attended/attended.scss";
import AllCards from "../../../components/events/attended/AllCards";

class EventsAttended extends Component {
  render() {
    return (
      <>
        <Tabs />
        <Row className='main-row'>
          <Col md={3} style={{ marginTop: "2rem" }}>
            <Container>
              <CheckBoxes />
              <CheckBoxes />
              <CheckBoxes />
              <CheckBoxes />
            </Container>
          </Col>
          <Col md={9}>
            <Row>
              <h1 className='card-category-title'>Events you attended</h1>
            </Row>
            <AllCards></AllCards>
          </Col>
        </Row>
      </>
    );
  }
}

export default EventsAttended;
