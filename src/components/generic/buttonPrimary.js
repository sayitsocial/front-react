import React from "react";
import { Button } from "react-bootstrap";
import "./generic.scss";

class ButtonPrimary extends React.Component {
  render() {
    return (
      <>
        <Button
          hidden={this.props.hidden}
          style={this.props.style}
          className={"primary-button btn-danger " + this.props.className}
          variant='primary'
          id={this.props.id}
          type={this.props.type}
          onClick={this.props.onClick ? this.props.onClick.bind(this) : null}
        >
          {this.props.label}
        </Button>
      </>
    );
  }
}

export default ButtonPrimary;
