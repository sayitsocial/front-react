import React, { Component } from "react";
import ContactForm from "../../components/contact/ContactForm";
import ContactHeader from "../../components/contact/ContactHeader";

class Contact extends Component {
  render() {
    return (
      <>
        <ContactHeader />
        <ContactForm />
      </>
    );
  }
}

export default Contact;
