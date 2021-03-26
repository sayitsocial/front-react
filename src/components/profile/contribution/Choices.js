import React, { Component } from "react";
import { Row } from "react-bootstrap";
import "../../../components/profile/profile.scss";
import InterestCard from "./InterestCard";

class Choices extends Component {
  render() {
    return (
      <>
        <div className='choices'>
          <h3>Aniket's Interest</h3>
          <Row style={{ marginTop: "1.25rem" }}>
            <InterestCard />
            <InterestCard />
            <InterestCard />
          </Row>
          <Row style={{ marginTop: "1.25rem" }}>
            <InterestCard />
            <InterestCard />
            <InterestCard />
          </Row>
        </div>
      </>
    );
  }
}

export default Choices;
