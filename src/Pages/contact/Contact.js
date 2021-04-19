import React, { Component } from "react";

import ContactForm from "../../components/contact/ContactForm";
import ContactHeader from "../../components/contact/ContactHeader";
import ContactMap from "../../components/contact/ContactMap";
import "../../components/contact/contact.scss";

class Contact extends Component {
  render() {
    return (
      <>
        <div className='contact-container mb-4'>
          <div className='item1'>
            <ContactHeader />
          </div>
          <div className='item2'>
            <ContactForm />
          </div>
          <div className='item3'>
            <ContactMap />
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
