import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
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
        <Col md={4} className='host-form-1'>
          <h1 className='heading'>Pick Date and Time</h1>
          <div>
            <Calendar className="calendar" onChange={onChange} value={value} />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default ChooseDate;
