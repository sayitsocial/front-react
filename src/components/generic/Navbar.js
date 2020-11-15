import React from "react";
import { Col, Navbar as BSNavbar, Form, Nav } from "react-bootstrap";
import "./generic.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navlinks: [
        {
          name: "home",
          icon: process.env.PUBLIC_URL + "/navbar/bx-home-alt.svg",
          link: "#",
        },
        {
          name: "list",
          icon: process.env.PUBLIC_URL + "/navbar/fi-list.svg",
          link: "#",
        },
        {
          name: "bell",
          icon: process.env.PUBLIC_URL + "/navbar/bx-bell.svg",
          link: "#",
        },
        {
          name: "user",
          icon: process.env.PUBLIC_URL + "/navbar/fi-user.svg",
          link: "#",
        },
      ],
    };
  }
  render() {
    return (
      <>
        <BSNavbar expand='lg' className='row main-navbar'>
          <Col md={3}>
            <BSNavbar.Brand
              href='#'
              className='d-flex main-navbar-brand align-items-center'
            >
              <img
                src={process.env.PUBLIC_URL + "/navbar/sayitsocial.svg"}
                alt='logo'
                className='mr-4'
              ></img>
              <div className='mb-1'> SayItSocial</div>
            </BSNavbar.Brand>
          </Col>
          <Col md={6}>
            <Form inline className='my-2 my-lg-0'>
              <Form.Group className='w-100' controlId='formSearchbar'>
                <Form.Control type='search' placeholder='Search' />
              </Form.Group>
            </Form>
          </Col>
          <Col md={3}>
            <Nav className='float-right nav-icon-group'>
              {this.state.navlinks.map((type, index) => (
                <Nav.Link href={type.link} key={index}>
                  <img
                    className='navlink-icon'
                    src={type.icon}
                    width='24'
                    height='24'
                    alt={type.name}
                  ></img>
                </Nav.Link>
              ))}
            </Nav>
          </Col>
        </BSNavbar>
      </>
    );
  }
}

export default Navbar;
