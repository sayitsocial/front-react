import React, { Component } from "react";
import AllCards from "../../../components/events/attending/AllCards"
import "../../../components/events/attending/attending.scss";

class EventsAttending extends Component {
  render () {
    return (
      <>
        <h3 className='mx-5 mt-2'>Events You are Attending</h3>
        <AllCards />
      </>
    );
  }
}

export default EventsAttending;
