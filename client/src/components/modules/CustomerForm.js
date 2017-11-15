import React, { Component } from "react";

export default class CustomerForm extends Component {
  render() {
    return (
      <div class="row container">
        <form class="col s6">
          <div class="row">
            <div class="input-field col s12">
              <input type="password" placeholder="password" />
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input type="email" placeholder="email" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
