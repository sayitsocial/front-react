import React, { Component } from "react";

class EventType extends Component {
  render() {
    return (
      <>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/register/choose-identity-model.png"}
            alt=''
          />
        </div>
        <div>
          <h2>Choose Your Event Type</h2>
          <input placeholder='Event Name' />
          <label>
            <input type='radio' />
            In-Person
          </label>
          <h4>Event SubType</h4>
          <select name='subtype'>
            <option value='activity'>Activity</option>
            <option value='get together'>Get Together</option>
          </select>
          <h4>Event Categories</h4>
          <input placeholder='Eg. Environment' />
          <br />
          <hr />
          <button value='Next' type='submit'>
            Next
          </button>
        </div>
      </>
    );
  }
}

export default EventType;
