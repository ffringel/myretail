import React, { Component } from "react";

class Promotions extends Component {
  //get a list of available promos currently offered by myretail
  getPromotions = promos => {
    if (promos === undefined) {
      return <div />;
    } else {
      return promos.map((promo, index) => {
        return (
          <a key={index} className="ui red item">
            {promo.Description[0].shortDescription}
          </a>
        );
      });
    }
  };

  render() {
    const promos = this.props.promotions;
    const promotion = this.getPromotions(promos);
    return <div className="ui link list">{promotion}</div>;
  }
}

export default Promotions;
