import React, { Component } from "react";

import ContactForm from "../../components/contact/ContactForm";
import ContactHeader from "../../components/contact/ContactHeader";
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
          <div class='mapouter'>
            <div class='gmap_canvas'>
              <iframe
                title='map'
                width='100%'
                height='350'
                id='gmap_canvas'
                src='https://maps.google.com/maps?q=suncity%20road,%20sinhagad%20road&t=&z=13&ie=UTF8&iwloc=&output=embed'
                frameborder='0'
                scrolling='yes'
                marginheight='0'
                marginwidth='0'
              ></iframe>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
