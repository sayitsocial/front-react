import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimeInput from "material-ui-time-picker";
import "./EventsHost.scss";

function ChooseDate() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Row>
        <Col md={5}>
          <Image
            className='upload-img'
            src={process.env.PUBLIC_URL + "/register/about-you-model.png"}
            alt=''
            fluid
          />
        </Col>
        <Col md={1}></Col>
        <Col md={3} className='host-form-1'>
          <h1 className='heading'>Pick Date and Time</h1>
          <Calendar className='calendar' onChange={onChange} value={value} />
        </Col>
        <Col md={2}>
          <h5 style={{ marginTop: "12rem" }}>Event Start time</h5>
          <TimeInput  mode='12h' />
          <h5 style={{ marginTop: "5rem" }}>Event End time</h5>
          <TimeInput  mode='12h' />
        </Col>
      </Row>
    </>
  );
}

export default ChooseDate;
