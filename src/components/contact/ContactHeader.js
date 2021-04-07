import React, { Component } from "react";
import "./contact.scss";

class ContactHeader extends Component {
  render() {
    return (
      <>
        <div className='contact-header'>
          <h1> Get in touch </h1>
          <h5 className='mt-4'>
            We would love to hear from you, suggestions, feedbacks or anything.
            <br />
            Drop us a message and we will connect with you
          </h5>
        </div>
      </>
    );
  }
}

export default ContactHeader;
