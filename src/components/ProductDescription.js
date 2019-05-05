import React, { Component } from "react";

class ProductDescription extends Component {
  state = {
    item_data: []
  };

  connectToServer() {
    const url = "https://salty-forest-26637.herokuapp.com/";
  }

  componentDidMount() {
    this.connectToServer();
  }

  render() {
    const { data } = this.state;

    return (
      <div className="ui vertically divided grid">
        <div className="one column row">
          <div className="column">
            <div className="ui tag labels">
              <a className="ui red label">$10.00</a>
            </div>
            <div className="ui link list">
              <a className="item">Spent $50, ship free</a>
              <a className="item">
                $25 gift card with purchase of a select Ninja Blender
              </a>
            </div>
          </div>
        </div>
        <div className="one column row">
          <div className="ui two column grid">
            <div className="row">
              <div className="column">
                <button className="ui negative basic button">
                  PICKUP IN STORE
                </button>
              </div>
              <div className="column">
                <button className="ui negative basic button">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="one column row">
          <div className="ui items">
            <div className="item">
              <div className="content">
                <a className="header">Ninja Pro Blender</a>
                <div className="description">
                  <p>
                    Get the same professional performance power blah blah blah
                  </p>
                  <h3 className="ui header">Product highlights</h3>
                  <ul className="ui list">
                    <li>Gaining Access</li>
                    <li>Gaining Access</li>
                    <li>Gaining Access</li>
                    <li>Gaining Access</li>
                    <li>Inviting Friends</li>
                    <li>Warranty</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDescription;
