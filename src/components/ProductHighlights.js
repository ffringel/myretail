import React, { Component } from "react";
import renderHTML from "react-render-html";

class ProductHighlights extends Component {
  //get product features from itemDescription props and return them as a list
  getHighlights = itemDescription => {
    if (itemDescription === undefined) {
      return <div />;
    } else {
      return itemDescription[0].features.map((feature, index) => {
        return <li key={index}>{renderHTML(feature)}</li>;
      });
    }
  };

  render() {
    const itemDescription = this.props.itemDescription;
    const features = this.getHighlights(itemDescription);
    return (
      <div className="ui feed">
        <h2 className="ui header">Product highlights</h2>
        <ul>{features}</ul>
      </div>
    );
  }
}

export default ProductHighlights;
