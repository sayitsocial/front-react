import React from "react";

class CancelAttendButton extends React.Component {
  render() {
    return (
      <div className='btn-cancel-wrapper'>
        <label>Attending</label>
        <button className='btn-cancel'>Cancel</button>
      </div>
    );
  }
}

export default CancelAttendButton;
