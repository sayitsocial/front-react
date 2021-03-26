import React, { Component } from "react";

class TeamCard extends Component {
  render() {
    return (
      <>
        <img src='https://picsum.photos/200' alt='' />
        <h5>Gresham Nelson</h5>
        <div className="card-bottom">
          <h6 className="role">CEO- founder</h6>
          <a href='#'>Linkedln</a>
        </div>
      </>
    );
  }
}

export default TeamCard;
