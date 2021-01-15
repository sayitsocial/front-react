import React from "react";

class ImageComponent extends React.Component {
  render() {
    return (
      <>
        <img
          className='m-auto choosemodel-img img-fluid'
          src={process.env.PUBLIC_URL + this.props.src}
          alt='Choose identity model'
        />
      </>
    );
  }
}

export default ImageComponent;
