import React, { Component } from "react";
import { Row } from "react-bootstrap";
import AttendingCard from "../../../components/events/attending/attendingCard";
import "../../../components/events/attending/attending.scss";

class EventsAttending extends Component {
  render() {
    return (
      <>
        <h3 className='mx-5 mt-2'>Events You are Attending</h3>
        <Row className='mx-4'>
          <AttendingCard />
        </Row>
      </>
    );
  }
}

export default EventsAttending;
