import React, { Component } from "react";
import { Link } from "react-router-dom";
import { store } from "../../index";
import { connect } from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: 0
    };
  }
  componentDidUpdate() {
    const { orders = {} } = this.props;
    Object.keys(orders).length == 0 && this.setState({ orders: orders + 1 });
    console.log(this.state.orders, "INI NIHH");
  }
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
              <Link to={"addAttraction"}>Add Attraction</Link>
            </li>
            <li>
              <Link to={"cart"}>
                <i className="material-icons">shopping_cart</i>
              </Link>
            </li>
            {orders && (
              <li>
                <p>Hhe</p>
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
