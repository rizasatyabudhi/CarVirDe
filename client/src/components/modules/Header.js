import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper deep-purple darken-3 lighten-1">
          <Link to={"/"} className="brand-logo" style={{ marginLeft: "1em" }}>
            CarVirde
          </Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <Link to={"register"}>Register</Link>
            </li>
            <li>
              <Link to={"login"}>Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
