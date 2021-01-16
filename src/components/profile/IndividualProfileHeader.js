import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Col, Row, Image } from "react-bootstrap";
import "../../components/profile/profile.scss";

class IndividualProfileHeader extends Component {
  render() {
    return (
      <>
        <div className='indv-profile-header'>
          <Jumbotron className='profile-jumbotron'>
            <Row>
              <Col md={3}>
                <Image src='https://picsum.photos/200' roundedCircle fluid />
              </Col>
              <Col md={4}>
                <h1>Aniket Devgune</h1>
                <h4>
                  <b>Member Since :</b> Aug 2020
                </h4>
                <Row>
                  <Col lg={6} md={12}>
                    <h2>24</h2>
                    <p>Events Attended</p>
                  </Col>
                  <Col lg={6} md={12}>
                    <h2>24</h2>
                    <p>Events Hosted</p>
                  </Col>
                </Row>
              </Col>
              <Col md={4}>
                <span>
                  <Image
                    className='img-medal'
                    style={{ height: "90px", marginTop: "18px" }}
                    src={process.env.PUBLIC_URL + "/profile/medal.svg"}
                    alt='medal'
                  />
                  <span className='points'>300</span>
                  <h4 className='h4-points'>points</h4>
                </span>
                <a
                  className='btn btn-outline-primary btn-view'
                  href='index.html'
                  role='button'
                >
                  View Past Events
                </a>
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

export default IndividualProfileHeader;
