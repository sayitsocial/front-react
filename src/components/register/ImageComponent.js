import React from "react";

class ImageComponent extends React.Component {
  render() {
    return (
      <>
        <img
          className="m-auto choosemodel-img img-fluid"
          src={process.env.PUBLIC_URL + "/register/choose-identity-model.png"}
          alt="Choose identity model"
        />
      </>
    );
  }
}

export default ImageComponent;
