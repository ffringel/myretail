import React from "react";

//function to render main menu
const MainMenu = () => {
  return (
    <div className="ui red seven item borderless inverted menu">
      <div className="header item">
        sign in / account
        <i className="angle down icon" />
      </div>
      <a className="item">find a store</a>
      <a className="item">weekly ad</a>
      <a className="item">gift card</a>
      <a className="item">registries</a>
      <a className="item">lists</a>
      <a className="item">REDcard</a>
    </div>
  );
};

//function to render the secondary menu
const SecondaryMenu = () => {
  return (
    <div className="ui red three item secondary inverted menu">
      <a className="item">
        <i className="list icon" />
        shop all categories
      </a>
      <div className="search item">
        <div className="ui icon input">
          <input type="text" placeholder="Search..." />
          <i className="ui search icon" />
        </div>
      </div>
      <div className="right menu">
        <a className="item">
          <i className="cart icon" />
          your cart
          <i className="angle right icon" />
        </a>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="ui red inverted segment">
      <MainMenu />
      <SecondaryMenu />
    </div>
  );
};

export default Header;
