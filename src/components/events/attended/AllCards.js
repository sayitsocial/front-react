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
  async componentDidMount() {
    const res = await Axios.get(populateUrl("/api/event/attendee"), {
      // TODO: Store volunteer id somewhere in client
      params: { volunteer_id: 1 },
    });
    if (res.data.length > 0) {
      this.setState({ events: res.data });
      console.log(this.state.events[0]);
    }
  }

  render() {
    return (
      <Row className='row-of-card'>
        {this.state.events.map((value, index) => (
          <EventCard
            title={value.event.name}
            desc={value.event.description}
            date={value.event.start_time}
            key={index}
          />
        ))}
      </Row>
    );
  }
}

export default AllCards;
