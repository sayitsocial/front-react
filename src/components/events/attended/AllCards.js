import React, { Component } from "react";
import EventCard from "./eventCard";
import { Row } from "react-bootstrap";

class AllCards extends Component {
  render() {
    return (
      <Row className='row-of-card'>
        <EventCard />
      </Row>
    );
  }
}

export default AllCards;
