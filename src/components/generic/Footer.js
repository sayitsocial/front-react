import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonSecondary from "./buttonSecondary";
import "./generic.scss";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      footerlinks: {
        Company: {
          About: "#",
          Support: "#",
          Press: "#",
          "Legal & Privacy": "#",
        },
        "Quick Links": {
          News: "#",
          "Contact Us": "#",
          FAQ: "#",
        },
        Social: {
          Twitter: "#",
          "Google +": "#",
          "Linked In": "#",
          Facebook: "#",
        },
      },
    };
  }
  render() {
    return (
      <div className="footer">
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12}>
              <h2>Create and share your events</h2>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12}>
              <ButtonSecondary
                className="button-left"
                label="Get Started"
              ></ButtonSecondary>
            </Col>
          </Row>
          <hr class="footer-line" />
          <Row>
            {Object.entries(this.state.footerlinks).map(([key, value]) => (
              <Col xl={3} lg={3} md={4} sm={6}>
                <div className="footer-widget">
                  <div className="footer-title">{key}</div>
                  <ul className="list-unstyled">
                    {Object.entries(value).map(([key1, value1]) => (
                      <li>
                        <Link to={value1}>{key1}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
            <Col xl={3} lg={3} md={4} sm={6}>
              <div className="footer-widget">
                <img
                  src={process.env.PUBLIC_URL + "/navbar/playstore_badge.svg"}
                  alt="playstore"
                  width="200"
                  height="50"
                ></img>
                <div>&nbsp;</div>
                <img
                  src={process.env.PUBLIC_URL + "/navbar/appstore_badge.svg"}
                  alt="playstore"
                  width="200"
                  height="50"
                ></img>
              </div>
            </Col>
          </Row>
          <hr class="footer-line" />
          <Row>
            <Col className="text-center footer-subtitle">
              SayItSocial 2020. All Rights Reserved
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
