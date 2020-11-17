import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./Navbar.scss";

class NavbarRegister extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="register-navbar" sticky="top">
          <Navbar.Brand>SayItSocial</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Item>
                <Nav.Link>About Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Pricing</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Policy</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarRegister;
