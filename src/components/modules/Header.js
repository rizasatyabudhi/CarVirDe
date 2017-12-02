import React, { Component } from "react";
import { Link } from "react-router-dom";
import { store } from "../../index";
import { connect } from "react-redux";

class Header extends Component {
  componentDidUpdate() {}
  render() {
    const { orders = {}, auth = {} } = this.props;
    return (
      <nav style={{ marginBottom: "20px" }}>
        <div class="nav-wrapper deep-purple darken-3 lighten-1">
          <Link
            to={"/"}
            className="brand-logo logo-font"
            style={{ marginLeft: "1em" }}
          >
            CarVirde
          </Link>
          <ul class="right">
            <li>
              <Link to={"register"}>Register</Link>
            </li>
            <li>
              <Link to={"login"}>Login</Link>
            </li>
            {store.getState().auth === "rent" && (
              <li>
                <Link to={"addCar"}>Tambah Mobil Rental</Link>
              </li>
            )}
            {store.getState().auth === "attraction" && (
              <li>
                <Link to={"addAttraction"}>Tambah Tempat Wisata</Link>
              </li>
            )}
            {store.getState().auth === "customer" && (
              <li>
                <Link to={"cart"}>
                  <i className="material-icons">shopping_cart</i>
                </Link>
              </li>
            )}
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
