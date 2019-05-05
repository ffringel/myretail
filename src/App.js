import React, { Component } from "react";
import Header from "./components/Header";
import PageBody from "./components/PageBody";

class App extends Component {
  render() {
    return (
      <div className="ui content">
        <Header />
        <PageBody />
      </div>
    );
  }
}

export default App;
