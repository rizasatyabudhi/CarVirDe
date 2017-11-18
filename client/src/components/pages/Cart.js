import React, { Component } from "react";
import { CarCart, AttractionCart, TotalPriceCart } from "../modules/CartCard";

export default class Cart extends Component {
  render() {
    return (
      <div className="container">
        <h4>Your Orders</h4>
        <div class="row">
          <CarCart />
          <AttractionCart />
          <TotalPriceCart />
        </div>
      </div>
    );
  }
}
