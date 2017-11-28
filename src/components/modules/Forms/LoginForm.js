import React, { Component } from "react";

export class CustomerLoginForm extends Component {
  render() {
    return (
      <div className="row ">
        <form className="col s12 center-align">
          <div className="card-panel z-depth-2" style={{ marginTop: "3em" }}>
            <div className="col s12">
              <h2>Customer</h2>
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
            {this.props.children}
          </div>
        </form>
      </div>
    );
  }
}

export class CarOwnerLoginForm extends Component {
  render() {
    return (
      <div className="row ">
        <form className="col s12 center-align">
          <div className="card-panel z-depth-2" style={{ marginTop: "3em" }}>
            <div className="col s12">
              <h2>Pemilik Rental</h2>
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
            {this.props.children}
          </div>
        </form>
      </div>
    );
  }
}

export class AttractionOwnerLoginForm extends Component {
  render() {
    return (
      <div className="row ">
        <form className="col s12 center-align">
          <div className="card-panel z-depth-2" style={{ marginTop: "3em" }}>
            <div className="col s12">
              <h2>Pemilik Tempat Wisata</h2>
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
            {this.props.children}
          </div>
        </form>
      </div>
    );
  }
}
