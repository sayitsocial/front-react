import React, { Component } from "react";
import EventType from "../../../components/events/host/EventType";
import EventDescription from "../../../components/events/host/EventDescription";

class Host extends Component {
  render() {
    return (
      <>
        <EventType />
        <EventDescription />
      </>
    );
  }
}

export default Host;
