import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import "../style/App.css";
import "../style/_RentCar.css";

import Landing from "./pages/Landing";
import Register from "./pages/Register";
import RentCar from "./pages/RentCar";
import Attraction from "./pages/Attraction";
import Cart from "./pages/Cart";
import AddCar from "./pages/AddCar";
import Header from "./modules/Header";
import Footer from "./modules/Footer";

class App extends Component {
  render() {
    return (
      <div className="">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/rentCar" component={RentCar} />
            <Route exact path="/attraction" component={Attraction} />
            <Route exact path="/addCar" component={AddCar} />
            <Route exact path="/cart" component={Cart} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
