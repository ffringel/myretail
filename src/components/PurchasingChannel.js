import React, { Component } from "react";

class PurchasingChannel extends Component {
  //check if purchasingChannelCode is 0 or 1 and if available online, display pickup in store button
  getOnlineChannel = (pCode, status) => {
    if (status && (Number(pCode) === 0 || Number(pCode) === 1)) {
      return <button className="ui negative basic button">ADD TO CART</button>;
    }
  };

  //check if purchasingChannelCode is 0 or 2 and if available instore, display pickup in store button
  getPickupChannel = (pCode, eligible) => {
    if (eligible && (Number(pCode) === 0 || Number(pCode) === 2)) {
      return (
        <button className="ui negative basic button">PICKUP IN STORE</button>
      );
    }
  };

  render() {
    const pCode = this.props.channelCode;
    const eligible = this.props.eligible;
    const status = this.props.status;
    const onlineChannel = this.getOnlineChannel(pCode, status);
    const pickupChannel = this.getPickupChannel(pCode, eligible);

    return (
      <div className="ui two column grid">
        <div className="row">
          <div className="column">{onlineChannel}</div>
          <div className="column">{pickupChannel}</div>
        </div>
      </div>
    );
  }
}

export default PurchasingChannel;
