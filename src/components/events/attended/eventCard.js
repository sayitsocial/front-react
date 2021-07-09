import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class EventCard extends Component {
  render () {
    return (
      <Col md={3}>
        <Card className='card-shadow'>
          <Card.Img
            className='card-img'
            variant='top'
            src='https://picsum.photos/id/1005/300/200'
            alt='card caption'
          ></Card.Img>
          <div className='d-flex card-img-overlay'>
            <span className='badge badge-warning'>In-Person</span>
          </div>
          <Card.Body className='zindex-top card-body'>
            <Card.Title className='blue-text'>
              {this.props.title} <br />
              <span>
                <small>{this.props.date}</small>
              </span>
            </Card.Title>
            <Card.Text>{this.props.desc}</Card.Text>
          </Card.Body>
          <Card.Footer className='zindex-top card-footer'>
            <h6>{this.props.footer_title}</h6>
            <p className='d-flex user'>
              <img
                className='rounded-circle'
                width='25'
                height='25'
                src='http://jlantunez.com/imgs/avatar.jpg'
                alt='Avatar'
              />
            </p>
            <Link className='joined blue-text' to={this.props.footer_link}>{this.props.footer_name}</Link>
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}

export default EventCard;
