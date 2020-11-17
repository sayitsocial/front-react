import React, { Component } from "react";
import { Nav } from "react-bootstrap";

class Tabs extends Component {
  render() {
    return (
      <>
        <Nav justify variant='pills' defaultActiveKey='/home'>
          <Nav.Item>
            <Nav.Link eventKey='link-1'>Today</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='link-2'>This Week</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='link-3'>Next Week</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='link-4'>Next Month</Nav.Link>
          </Nav.Item>
        </Nav>
      </>
    );
  }
}

export default Tabs;
