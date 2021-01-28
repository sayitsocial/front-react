import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import AttendingCard from "../events/attending/attendingCard";
import "../../components/profile/profile.scss";

class NgoEventHosted extends Component {
  render() {
    return (
      <>
        <div className='ngo-event-hosted'>
          <Jumbotron className='profile-jumbotron'>
            <h3>Events Hosted</h3>
            <AttendingCard />
          </Jumbotron>
        </div>
      </>
    );
  }
}
export default NgoEventHosted;
