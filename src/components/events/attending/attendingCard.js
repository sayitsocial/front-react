import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";

class AttendingCard extends Component {
  render () {
    return (
      <>
        <Col md={4} className='mt-4'>
          <Card className='bg-dark text-white'>
            <Card.Img
              src='https://picsum.photos/id/1005/300/200'
              alt='Card image'
            />
            <Card.ImgOverlay className='d-flex justify-content-between '>
              <Card.Title>
                {this.props.title} 23 Aug 2020 <br /> 10pm
              </Card.Title>
              <Card.Title>{this.props.attendees_count}</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </>
    );
  }
}

export default AttendingCard;
