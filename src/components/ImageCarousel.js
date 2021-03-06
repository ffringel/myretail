import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class ImageCarousel extends Component {
  //get images from the images props and create a carousel
  getImages = images => {
    if (images === undefined) {
      return <div />;
    } else {
      return (
        <Carousel showArrows={true}>
          <div>
            <img
              className="ui fluid image"
              alt="Primary"
              src={images[0].PrimaryImage[0].image}
            />
          </div>
          {images[0].AlternateImages.map((image, index) => (
            <div key={index}>
              <img
                className="ui fluid image"
                alt="aternate"
                src={image.image}
              />
            </div>
          ))}
        </Carousel>
      );
    }
  };
  render() {
    const images = this.props.images;
    const imageCarousel = this.getImages(images);
    return <div className="ui section">{imageCarousel}</div>;
  }
}

export default ImageCarousel;
