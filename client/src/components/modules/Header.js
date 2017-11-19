import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav style={{ marginBottom: "20px" }}>
        <div class="nav-wrapper deep-purple darken-3 lighten-1">
          <Link to={"/"} className="brand-logo" style={{ marginLeft: "1em" }}>
            CarVirde
          </Link>
          <ul class="right">
            <li>
              <Link to={"register"}>Register</Link>
            </li>
            <li>
              <Link to={"login"}>Login</Link>
            </li>
            <li>
              <Link to={"rentCar"}>Rent a Car</Link>
            </li>
            <li>
              <Link to={"addCar"}>Add Car</Link>
            </li>
            <li>
              <Link to={"attraction"}>Attraction</Link>
            </li>
            <li>
              <Link to={"addAttraction"}>Add Attraction</Link>
            </li>
            <li>
              <Link to={"cart"}>
                <i className="material-icons">shopping_cart</i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
