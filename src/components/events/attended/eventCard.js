import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";

class EventCard extends Component {
  render() {
    return (
      <Col md={4}>
        <Card className='card-shadow'>
          <Card.Img
            variant='top'
            src='https://picsum.photos/id/1005/300/200'
            alt='card caption'
          ></Card.Img>
          <div className='d-flex card-img-overlay'>
            <span className='badge badge-warning'>In-Person</span>
          </div>
          <Card.Body className='zindex-top'>
            <Card.Title>
              Data Science Meetup <br />
              <span>
                <small>12 SEPT MONDAY 2020</small>
              </span>
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk.
            </Card.Text>
          </Card.Body>
          <Card.Footer className='zindex-top'>
            <h6>Big Events pvt. ltd.</h6>
            <p className='d-flex user'>
              <img
                className='rounded-circle'
                width='30'
                height='30'
                src='http://jlantunez.com/imgs/avatar.jpg'
                alt='Avatar'
              />
              <p className='joined blue-text'>18k people joined</p>
            </p>
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}

export default EventCard;
