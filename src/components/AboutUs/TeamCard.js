import React, { Component } from "react";
import { Image } from "react-bootstrap";

class TeamCard extends Component {
  render() {
    return (
      <>
        <img src='https://picsum.photos/200' alt='' />
        <h5>Gresham Nelson</h5>
        <div className='card-bottom'>
          <h6 className='role'>CEO- founder</h6>
          <Image src={process.env.PUBLIC_URL + "/register/linkedin.svg"} />
        </div>
      </>
    );
  }
}

export default TeamCard;
