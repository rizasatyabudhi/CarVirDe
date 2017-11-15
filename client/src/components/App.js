import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import "../style/App.css";

import Header from "./Header";
class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            {/* <Route exact path="/" component={Landing} /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
