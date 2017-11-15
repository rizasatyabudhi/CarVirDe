import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper teal lighten-1">
          <a href="#" class="brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="#">Rent Car</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
