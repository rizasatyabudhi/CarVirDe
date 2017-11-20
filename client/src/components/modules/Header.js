import React, { Component } from "react";
import { Link } from "react-router-dom";
import { store } from "../../index";
import { connect } from "react-redux";

class Header extends Component {
  componentDidUpdate() {}
  render() {
    const { orders = {} } = this.props;
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
              <Link to={"attractionPackage"}>Attraction Package</Link>
            </li>
            <li>
              <Link to={"addAttraction"}>Add Attraction</Link>
            </li>
            <li>
              <Link to={"cart"}>
                <i className="material-icons">shopping_cart</i>
              </Link>
            </li>
            <li
              className="valign-wrapper"
              style={{ marginRight: "20px", marginLeft: "-13px" }}
            >
              {store.getState().orders.length !== 0 && (
                <div className="numOfOrder">
                  {store.getState().orders.length}
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}
export default connect(mapStateToProps, {})(Header);
