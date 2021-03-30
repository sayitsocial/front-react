import React, { Component } from "react";

import ContactForm from "../../components/contact/ContactForm";
import ContactHeader from "../../components/contact/ContactHeader";
import "../../components/contact/contact.scss";

class Contact extends Component {
  render() {
    return (
      <>
        <div className='contact-container'>
          <div className='item1'>
            <ContactHeader />
          </div>
          <div className='item2'>
            <ContactForm />
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
