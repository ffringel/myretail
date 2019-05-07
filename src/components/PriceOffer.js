import React, { Component } from "react";

class PriceOffer extends Component {
  //Get the price of the item from the offer props
  getOffer = offer => {
    if (offer === undefined) {
      return <div />;
    } else {
      return (
        <div className="ui tag labels">
          <a className="ui big red label">
            {offer[0].OfferPrice[0].formattedPriceValue}
          </a>
          <div className="ui small label">
            {offer[0].OfferPrice[0].priceQualifier}
          </div>
        </div>
      );
    }
  };
  render() {
    const offer = this.props.offer;
    const offers = this.getOffer(offer);
    return <div>{offers}</div>;
  }
}

export default PriceOffer;
