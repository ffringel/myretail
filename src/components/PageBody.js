import React, { Component } from "react";
import ProductHighlights from "./ProductHighlights";
import ProductDetails from "./ProductDetails";
import ImageCarousel from "./ImageCarousel";
import CustomerReview from "./CustomerReview";
import PurchasingChannel from "./PurchasingChannel";
import PriceOffer from "./PriceOffer";
import Promotions from "./Promotions";

class PageBody extends Component {
  /*get item data from props and pass to the various component
  to be process and rendered on screen*/
  render() {
    const catalogData = this.props.catalogData;

    return (
      <div className="ui grid container">
        <div className="two column stackable row">
          <div className="column">
            <div className="ui large header">
              <h1 className="ui center aligned header">{catalogData.title}</h1>
            </div>
            <ImageCarousel images={catalogData.Images} />
          </div>
          <div className="column">
            <div className="ui vertically divided grid">
              <div className="one column row">
                <div className="column">
                  <PriceOffer offer={catalogData.Offers} />
                  <Promotions promotions={catalogData.Promotions} />
                </div>
              </div>
              <div className="one column row">
                <PurchasingChannel
                  channelCode={catalogData.purchasingChannelCode}
                  status={catalogData.inventoryStatus}
                  eligible={catalogData.eligibleFor}
                />
                {catalogData.POBoxProhibited}
              </div>
              <div className="one column row">
                <div className="ui items">
                  <div className="item">
                    <div className="content">
                      <ProductDetails details={catalogData.shortDescription} />
                      <ProductHighlights
                        itemDescription={catalogData.ItemDescription}
                      />
                      <CustomerReview reviews={catalogData.CustomerReview} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageBody;
