import React from "react";
import ProductDescription from "./ProductDescription";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Breadcrumb = () => {
  return (
    <div className="ui breadcrumb">
      <a className="section">Home</a>
      <div className="divider"> / </div>
      <a className="section">Store</a>
      <div className="divider"> / </div>
      <div className="active section">coffeemakers</div>
    </div>
  );
};

const PageBody = () => {
  return (
    <div className="ui grid">
      <Breadcrumb />
      <div className="two column stackable row">
        <div className="column">
          <div className="ui large header">
            Ninja Profesional Blender with single serving blending cups
          </div>
          <div className="ui section">
            <Carousel showArrows={true}>
              <div>
                <img
                  className="ui fluid image"
                  src="http://target.scene7.com//is//image//Target//14263758"
                />
              </div>
              <div>
                <img
                  className="ui fluid image"
                  src="http://target.scene7.com//is//image//Target//14263758"
                />
              </div>
              <div>
                <img
                  className="ui fluid image"
                  src="http://target.scene7.com//is//image//Target//14263758"
                />
              </div>
              <div>
                <img
                  className="ui fluid image"
                  src="http://target.scene7.com//is//image//Target//14263758"
                />
              </div>
              <div>
                <img
                  className="ui fluid image"
                  src="http://target.scene7.com//is//image//Target//14263758"
                />
              </div>
              <div>
                <img
                  className="ui fluid image"
                  src="http://target.scene7.com//is//image//Target//14263758"
                />
              </div>
              <div>
                <img
                  className="ui fluid image"
                  src="http://target.scene7.com//is//image//Target//14263758"
                />
              </div>
            </Carousel>
          </div>
          <div className="ui horizontal segments">
            <div className="ui segment">
              <p />
            </div>
            <div className="ui segment">
              <p />
            </div>
          </div>
        </div>
        <div className="column">
          <ProductDescription />
        </div>
      </div>
    </div>
  );
};

export default PageBody;
