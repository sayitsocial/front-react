import React, { Component } from "react";
import EventType from "../../../components/events/host/EventType";
import EventDescription from "../../../components/events/host/EventDescription";
import UploadImage from "../../../components/events/host/UploadImage";

class Host extends Component {
  render() {
    return (
      <>
        {/* <EventType /> */}
        {/* <EventDescription /> */}
        <UploadImage />
      </>
    );
  }
}

export default Host;
