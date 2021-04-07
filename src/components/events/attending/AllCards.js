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
    const res = await Axios.get(populateUrl("/api/event/get/all"));
    if (res.data.length > 0) {
      this.setState({ events: res.data });
    }
  }

  getDate (timestamp) {
    var d = new Date(timestamp * 1000);
    let hrs = d.getHours()
    let mins = d.getMinutes()
    if (hrs <= 9)
      hrs = '0' + hrs
    if (mins < 10)
      mins = '0' + mins
    const postTime = hrs + ':' + mins
    return [d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ' ' + postTime]
  }

  render () {
    return (
      <Row className='mx-4'>
        {this.state.events.map((value, index) => (
          <AttendingCard key={index} title={value.name} date={this.getDate(value.start_time)} />
        ))}
      </Row>
    );
  }
}

export default AllCards;