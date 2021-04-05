import React, { Component } from "react";
import { Row } from "react-bootstrap";
import Axios from "axios";
import AttendingCard from './attendingCard'
import { populateUrl } from "../../../constants";

class AllCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    };
  }
  async componentDidMount () {
    const res = await Axios.get(populateUrl("/api/event/get/all"), {
      // TODO: Store volunteer id somewhere in client
      params: {},
    });
    if (res.data.length > 0) {
      this.setState({ events: res.data });
    }
  }

  render () {
    return (
      <Row className='mx-4'>
        {this.state.events.map((value, index) => (
          <AttendingCard title={value.name} />
        ))}
      </Row>
    );
  }
}

export default AllCards;