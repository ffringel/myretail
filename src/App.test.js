import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { configure, shallow, mount } from "enzyme";
import { expect } from "chai";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import Header from "./components/Header";
import CustomerReview from "./components/CustomerReview";
import ImageCarousel from "./components/ImageCarousel";
import PageBody from "./components/PageBody";
import PriceOffer from "./components/PriceOffer";
import ProductDetails from "./components/ProductDetails";
import ProductHighlights from "./components/ProductHighlights";
import Promotions from "./components/Promotions";
import PurchasingChannel from "./components/PurchasingChannel";

configure({ adapter: new Adapter() });

// test individual components are all loaded
describe("App's components are loaded and rendered", () => {
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

  // test if header is being rendered
  it("render header content with crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div);
  });

  // test component is being rendered
  it("render PageBody content with crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PageBody catalogData="data" />, div);
  });
});

// check for the presence of a child component
it("check if an ImageCarousel component is present in PageBody", () => {
  const wrapper = shallow(<PageBody catalogData="data" />);
  expect(wrapper.find(ImageCarousel)).to.have.lengthOf(1);
});

//Allows us to set props
it("allows us to set props", () => {
  const wrapper = mount(<PageBody catalogData="data" />);
  expect(wrapper.props().catalogData).to.equal("data");
  wrapper.setProps({ catalogData: "newData" });
  expect(wrapper.props().catalogData).to.equal("newData");
});
