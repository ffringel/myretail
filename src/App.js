import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header";
import PageBody from "./components/PageBody";

class App extends Component {
  state = { catalogData: [] };

  //Make an async Call to the server to get our json file
  connectToServer = async () => {
    const url = "https://salty-forest-26637.herokuapp.com/";

    const response = await axios.get(url);

    /*asign result of the function call to the component state*/
    const data = response.data.CatalogEntryView[0];
    this.setState({ catalogData: data });
  };

  componentDidMount() {
    this.connectToServer();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <PageBody catalogData={this.state.catalogData} />
      </div>
    );
  }
}

export default App;
