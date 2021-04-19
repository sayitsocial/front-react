import React, { Component } from "react";
import "./contact.scss";

class ContactMap extends Component {
  render() {
    return (
      <>
        <div class='mapouter my-5'>
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
      </>
    );
  }
}

export default ContactMap;
