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
              <div className='mb-1 head'> SayItSocial</div>
            </BSNavbar.Brand>
          </Col>
          <Col md={6}>
            <Form inline className='my-2 my-lg-0'>
              <Form.Group className='w-100' controlId='formSearchbar'>
                <Form.Control
                  type='search'
                  placeholder='Search'
                  className='w-100 text-center search'
                />
              </Form.Group>
            </Form>
          </Col>
          <Col md={3}>
            <BSNavbar.Toggle className='ham' aria-controls='basic-navbar-nav' />
            <BSNavbar.Collapse id='basic-navbar-nav'>
              <Nav className=' nav-icon-group' className='mx-auto'>
                {this.state.navlinks.map((type, index) => (
                  <Nav.Link
                    className='d-flex links'
                    href={type.link}
                    key={index}
                  >
                    <img
                      className='navlink-icon'
                      src={type.icon}
                      width='24'
                      height='24'
                      alt={type.name}
                    />
                    <div style={{ display: "none" }} className='icon-name'>
                      {type.name}
                    </div>
                  </Nav.Link>
                ))}
              </Nav>
            </BSNavbar.Collapse>
          </Col>
        </BSNavbar>
      </>
    );
  }
}

export default Navbar;
