import React, { Component } from "react";

export default class CarOwnerForm extends Component {
  render() {
    return (
      <div className="row ">
        <form className="col s12 center-align">
          <div className="card-panel z-depth-2" style={{ marginTop: "3em" }}>
            <div className="col s12">
              <h2>Car Owner</h2>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field col s6">
                <input type="text" placeholder="Email" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input type="text" placeholder="Address" />
              </div>
              <div className="input-field col s12">
                <input type="text" placeholder="Phone Number" />
              </div>
            </div>
            <button className="btn deep-purple darken-3 waves-effect waves-light">
              Submit <i class="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
