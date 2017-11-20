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
                <label style={{ marginTop: "-30px" }}>Username</label>
                <input type="text" />
              </div>
              <div className="input-field col s6">
                <label style={{ marginTop: "-30px" }}>Password</label>
                <input type="text" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <label style={{ marginTop: "-30px" }}>Email</label>
                <input type="text" />
              </div>
              <div className="input-field col s6">
                <label style={{ marginTop: "-30px" }}>Nama Lengkap</label>
                <input type="text" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <label style={{ marginTop: "-30px" }}>Alamat Rental</label>
                <input type="text" />
              </div>
              <div className="input-field col s6">
                <label style={{ marginTop: "-30px" }}>No Telfon</label>
                <input type="text" />
              </div>
            </div>
            <button className="btn deep-purple darken-3 waves-effect waves-light">
              Register <i class="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
