import React from "react";
import { Button } from "react-bootstrap";
import "./generic.scss";

class ButtonLight extends React.Component {
  render() {
    return (
      <>
        <Button
          hidden={this.props.hidden}
          style={this.props.style}
          className={"light-button bg-light " + this.props.className}
          variant="primary"
          id={this.props.id}
          onClick={this.props.onClick ? this.props.onClick.bind(this) : null}
        >
          {this.props.label}
        </Button>
      </>
    );
  }
}

export default ButtonLight;
