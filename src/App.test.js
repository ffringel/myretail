import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import CustomerReview from "./components/CustomerReview";
import ImageCarousel from "./components/ImageCarousel";
import PageBody from "./components/PageBody";
import PriceOffer from "./components/PriceOffer";
import ProductDetails from "./components/ProductDetails";
import ProductHighlights from "./components/ProductHighlights";
import Promotions from "./components/Promotions";
import PurchasingChannel from "./components/PurchasingChannel";

Enzyme.configure({ adapter: new Adapter() });

// test that app runs without crashing
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

// test that contents of Promotion component is displayed
it("render promotions without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Promotions />, div);
});

// test that contents of PurchasingChannel component is being displayed
it("render purchasing channels without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PurchasingChannel />, div);
});

// test that contents of ProductHighlights component is being displayed
it("render product highlights without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ProductHighlights />, div);
});

// test that contents of ProductDetails component is being displayed
it("render product details without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ProductDetails />, div);
});

// test that contents of PriceOffer component is being displayed
it("render price offers without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PriceOffer />, div);
});

// test that contents of CustomerReview component is being displayed
it("render customer reviews without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CustomerReview />, div);
});

// test that contents of ImageCarousel component is being displayed
it("render image carousel without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ImageCarousel />, div);
});
