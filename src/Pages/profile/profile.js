import React from "react";
import "../../components/profile/profile.scss";
import IndividualProfileHeader from "../../components/profile/IndividualProfileHeader";
import NgoProfileHeader from "../../components/profile/NgoProfileHeader";
import NgoBio from "../../components/profile/NgoBio";
import Contribution from "../../components/profile/contribution/Contribution";

class Profile extends React.Component {
  render() {
    return (
      <>
        <IndividualProfileHeader />
        <NgoProfileHeader />
        <NgoBio />
        <Contribution />
      </>
    );
  }
}

export default Profile;
