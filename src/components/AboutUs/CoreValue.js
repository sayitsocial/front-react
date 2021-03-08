import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

class CoreValue extends Component {
  render() {
    return (
      <>
        <div>
          <h3 className='goal'>Our current goal is to become</h3>
          <h3 className='platform'>
            <span className="color-blue">#1 event management platform </span>  in the world by <span className="color-pink">2030</span> 
          </h3>
        </div>
        <h3 className='core'>Our Core Values</h3>
        <Row className='corevalue-row'>
          <Col>
            <img src='https://picsum.photos/70/80' alt='' />
            <br />
            <h8> User-Delightment </h8>
          </Col>
          <Col >
            <img src='https://picsum.photos/70/80' alt='' />
            <br />
            <h8>Team Member Upliftment</h8>
          </Col>
          <Col>
            <img src='https://picsum.photos/70/80' alt='' />
            <br />
            <h8>Value for Profit</h8>
          </Col>
        </Row>
      </>
    );
  }
}

export default CoreValue;
