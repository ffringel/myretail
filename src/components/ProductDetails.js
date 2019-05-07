import React, { Component } from "react";

class ProductDetails extends Component {
  //Render Item details from the details props
  render() {
    return (
      <div className="content">
        <p>{this.props.details}</p>
      </div>
    );
  }
}

export default ProductDetails;
