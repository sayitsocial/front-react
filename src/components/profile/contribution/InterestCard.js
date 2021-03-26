import React, { Component } from "react";
import { Col, Card } from "react-bootstrap";
import "../../../components/profile/profile.scss";

class InterestCard extends Component {
  render() {
    return (
      <>
        <Col md={4}>
          <Card>
            <Card.Img
              src='https://picsum.photos/id/1005/300/200'
              alt='Card image'
            />
            <Card.ImgOverlay>
              <Card.Title>Donations</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </>
    );
  }
}

export default InterestCard;
