import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "./AboutUs.scss";

class TeamCard extends Component {
  render() {
    return (
      <>
        <div className='team-card'>
          <img src='https://picsum.photos/100' alt='' />
          <p className="person-name">{this.props.name}</p>
          <div className='card-bottom'>
            <h6 className='role'>{this.props.position}</h6>
            <a className="linkedin" href={this.props.linkedin}>
              <Image
                style={{ height: "1.15rem" }}
                src={process.env.PUBLIC_URL + "/contact/blue-linkedin.svg"}
              />
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default TeamCard;
