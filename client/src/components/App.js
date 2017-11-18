import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import "../style/App.css";
import "../style/_RentCar.css";

import Landing from "./pages/Landing";
import Register from "./pages/Register";
import RentCar from "./pages/RentCar";
import Attraction from "./pages/Attraction";

import Header from "./modules/Header";

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/rentCar" component={RentCar} />
            <Route exact path="/attraction" component={Attraction} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
