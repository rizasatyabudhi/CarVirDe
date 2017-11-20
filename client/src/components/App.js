import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Alert from "react-s-alert";

import "../style/App.css";
import "../style/_RentCar.css";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import "react-s-alert/dist/s-alert-css-effects/scale.css";
import "react-s-alert/dist/s-alert-css-effects/bouncyflip.css";
import "react-s-alert/dist/s-alert-css-effects/flip.css";
import "react-s-alert/dist/s-alert-css-effects/genie.css";
import "react-s-alert/dist/s-alert-css-effects/jelly.css";
import "react-s-alert/dist/s-alert-css-effects/stackslide.css";

import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import RentCar from "./pages/RentCar";
import Attraction from "./pages/Attraction";
import AttractionPackage from "./pages/AttractionPackage";
import Cart from "./pages/Cart";
import AddCar from "./pages/AddCar";
import addAttraction from "./pages/AddAttraction";
import Header from "./modules/Header";
import Footer from "./modules/Footer";
import AddAttraction from "./pages/AddAttraction";

class App extends Component {
  render() {
    return (
      <div className="">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/rentCar" component={RentCar} />
            <Route exact path="/attraction" component={Attraction} />
            <Route
              exact
              path="/attractionPackage"
              component={AttractionPackage}
            />
            <Route exact path="/addCar" component={AddCar} />
            <Route exact path="/addAttraction" component={AddAttraction} />
            <Route exact path="/cart" component={Cart} />
            <Footer />
            <Alert stack={{ limit: 3 }} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
