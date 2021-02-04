import React, { Component } from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import AttendingCard from "../events/attending/attendingCard";
import "../../components/profile/profile.scss";

class NgoEventHosted extends Component {
  render() {
    return (
      <>
        <div className='ngo-event-hosted'>
          <Jumbotron className='profile-jumbotron'>
            <h3 style={{ textAlign: "center" }}>Events Hosted</h3>
            <Row>
              <AttendingCard />
              <AttendingCard />
              <AttendingCard />
            </Row>
            <Row>
              <AttendingCard />
              <AttendingCard />
              <AttendingCard />
            </Row>
            <a href='index.html'>See More</a>
          </Jumbotron>
        </div>
      </>
    );
  }
}
export default NgoEventHosted;
