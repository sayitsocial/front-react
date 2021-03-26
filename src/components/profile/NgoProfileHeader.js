import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Col, Row, Image } from "react-bootstrap";
import "../../components/profile/profile.scss";

class NgoProfileHeader extends Component {
  render() {
    return (
      <>
        <div className='ngo-profile-header'>
          <Jumbotron className='profile-jumbotron'>
            <Row>
              <Col md={3}>
                <Image src='https://picsum.photos/200' roundedCircle fluid />
              </Col>
              <Col md={4}>
                <h1>Child in Need Institute</h1>
                <h4>
                  <b>Kolkata, India</b> &nbsp;&nbsp;&nbsp;
                  <b>President:</b> Samir Chaudhari
                </h4>
                <h4>Joined Since : Aug 2020</h4>
                <a
                  className='btn btn-outline-primary '
                  href='index.html'
                  role='button'
                >
                  View Past Events
                </a>
              </Col>
              <Col md={4}>
                <div className='ngo-profile-following'>
                  <div className='host-follow'>
                    <h1>24</h1>
                    <p>Events Hosted</p>
                  </div>
                  <div className='host-follow'>
                    <h1>13.8k</h1>
                    <p>Flollwers</p>
                  </div>
                </div>
              </Col>
              <Col md={1}>
                <a href='index.html' role='button'>
                  <Image
                    className='btn-settings'
                    style={{ width: "24px", margin: " 0.55rem 3rem 0rem" }}
                    src={process.env.PUBLIC_URL + "/profile/settings.svg"}
                    alt='settings'
                  />
                </a>
              </Col>
            </Row>
          </Jumbotron>
        </div>
      </>
    );
  }
}

export default NgoProfileHeader;
