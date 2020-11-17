import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import { connect } from "react-redux";
import { addRegisterData } from "../../../store/actions";

class OrgTypeSelection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultTypes: [
        {
          name: "NGO",
          img: process.env.PUBLIC_URL + "/register/ngo-icon.svg",
        },
        {
          name: "Company",
          img: process.env.PUBLIC_URL + "/register/company-icon.svg",
        },
        {
          name: "Social Org",
          img: process.env.PUBLIC_URL + "/register/social-group-icon.svg",
        },
      ],
    };
  }

  handleType = (event) => {
    this.props.dispatch(addRegisterData("orgtype", event.currentTarget.id));
  };
  render() {
    return (
      <>
        <CardDeck id="org-card-group">
          {this.state.defaultTypes.map((type, index) => (
            <Card
              className={
                (Number(index) === Number(this.props.orgtype)
                  ? "type-card-border"
                  : "") + " type-card"
              }
              id={index}
              key={index}
              onClick={this.handleType}
            >
              <Card.Img
                className="mx-auto img-fluid"
                variant="top"
                src={type.img}
              ></Card.Img>
              <Card.Body>
                <Card.Title className="mx-auto">{type.name}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
      </>
    );
  }
}

function handleState(state) {
  return {
    orgtype: state.registerReducer.registerData.orgtype,
  };
}

export default connect(handleState)(OrgTypeSelection);
