import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import "../style/App.css";

import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Header from "./modules/Header";
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
