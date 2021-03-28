import React, { Component } from "react";
import EventCard from "./eventCard";
import { Row } from "react-bootstrap";
import Axios from "axios";
import { populateUrl } from "../../../constants";

class AllCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    };
  }
  async componentDidMount () {
    const res = await Axios.get(populateUrl("/api/event/attendee"), {
      // TODO: Store volunteer id somewhere in client
      params: { volunteer_id: 1 },
    });
    if (res.data.length > 0) {
      for (let event of res.data) {
        let host = await this.geteventHost(event.event.event_id)
        event["host"] = host
      }
      this.setState({ events: res.data });
    }
  }

  async geteventHost (id) {
    const res = await Axios.get(populateUrl(`/api/event/host?event_id=${id}`));
    if (res.data.length > 0) {
      return res.data
    }
  }

  render () {
    return (
      <Row className='row-of-card'>
        {this.state.events.map((value) => (
          <EventCard
            title={value.event.name}
            desc={value.event.description}
            date={value.event.start_time}
            footer_link={(value.host && value.host.length > 0) ? value.host[0].organisation.organisation_id : undefined}
            footer_name={(value.host && value.host.length > 0) ? value.host[0].organisation.display_name : undefined}
            key={value.generated_id}
          />
        ))}
      </Row>
    );
  }
}

export default AllCards;
