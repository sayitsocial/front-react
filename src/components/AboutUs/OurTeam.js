import React, { Component } from "react";
import TeamCard from "./TeamCard";
import team_data from "./team_data";
import "./AboutUs.scss";

class OurTeam extends Component {
  render() {
    return (
      <>
        <h3 className='ourteam-heading'>Our Team</h3>
        <div className='ourteam-row'>
          {team_data.map((data) => {
            return <TeamCard {...data} />;
          })}
        </div>
      </>
    );
  }
}

export default OurTeam;
