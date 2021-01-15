import React, { Component } from "react";
import { Container } from "react-bootstrap";
import FormCheck from "./formCheck";

class CheckBoxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        {
          heading: "In Person",
          data: ["Get Together", "Activity"],
        },
        {
          heading: "Virtual",
          data: ["Webinar", "Livestream", "Video Events", "Contest"],
        },
      ],
    };
  }
  render() {
    return (
      <>
        <Container>
          {this.state.options.map((value, index) => (
            <FormCheck key={index} options={value} />
          ))}
        </Container>
      </>
    );
  }
}

export default CheckBoxes;
