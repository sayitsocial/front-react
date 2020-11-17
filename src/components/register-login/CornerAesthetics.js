import React from "react";
import "./Aesthetics.scss";

class CornerAsthetics extends React.Component {
  render() {
    return (
      <>
        <div className='left-bar'>
          <img
            src={process.env.PUBLIC_URL + "/register/left.png"}
            alt='just asthetics'
          />
        </div>
        <div className='right-bar'>
          <img
            src={process.env.PUBLIC_URL + "/register/right.png"}
            alt='just asthetics'
          />
        </div>
      </>
    );
  }
}

export default CornerAsthetics;
