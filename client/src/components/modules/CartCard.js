import React, { Component } from "react";
import AttractionPackageCard from "../modules/Attraction/AttractionPackageCard";

export class CarCart extends Component {
  render() {
    return (
      <div class="col s12">
        <div class="card-panel hoverable hover">
          <h5>Car Order</h5>
          <div className="row">
            <div className="col s10">
              <div className="card-content  ">
                <div className="row">
                  <div className="col s6">
                    <ul>
                      <li>
                        <div className="row">
                          <div className="col s12">
                            <span className="category">Tipe Mobil &nbsp;:</span>
                            {this.props.tipe}
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div className="col s12">
                            <span className="category">Merk Mobil &nbsp;:</span>
                            {this.props.merk}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col s6">
                    <ul>
                      <li>
                        <div className="row">
                          <div className="col s12">
                            <span className="category">
                              Tahun &nbsp;&nbsp;&nbsp;&nbsp;:
                            </span>
                            {this.props.tahun}
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div className="col s12">
                            <span className="category">Transmisi &nbsp;: </span>
                            {this.props.transmisi}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s2">
              <h5>Rp {this.props.harga}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class AttractionCart extends Component {
  render() {
    return (
      <div class="col s12">
        <div class="card-panel hoverable">
          <h5>Attraction Order</h5>
          <div className="row">
            <div className="col s10">
              <div className="card-content  ">
                <div className="row">
                  <div className="col s6">
                    <ul>
                      <li>
                        <div className="row">
                          <div className="col s12">
                            <span className="category">
                              Attraction Name&nbsp;:
                            </span>
                            {this.props.nama}
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div className="col s12">
                            <span className="category">Location&nbsp;:</span>
                            {this.props.alamat}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s2">
              <h5>Rp {this.props.harga}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class AttractionPackageCart extends Component {
  render() {
    return (
      <div class="col s12">
        <div class="card-panel hoverable" style={{ height: "370px" }}>
          <h5>Travel Package Order</h5>
          <div class="col s4">
            <div class="card horizontal z-depth-3">
              <div class="card-stacked">
                <div class="card-content">
                  <div className="col s12">
                    <p style={{ fontWeight: "800" }}>{this.props.nama0}</p>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      <ul>
                        <li>
                          <i className="material-icons">location_on</i>
                          {this.props.alamat0}
                        </li>
                        <li>
                          <i className="material-icons">attach_money</i>
                          <span>
                            Rp &nbsp;
                            {this.props.harga0}
                            /Pax
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="col s12 paragraph"
                      style={{ marginTop: "23px" }}
                    >
                      {this.props.deskripsi0}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col s4">
            <div class="card horizontal z-depth-3">
              <div class="card-stacked">
                <div class="card-content">
                  <div className="col s12">
                    <p style={{ fontWeight: "800" }}>{this.props.nama1}</p>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      <ul>
                        <li>
                          <i className="material-icons">location_on</i>
                          {this.props.alamat1}
                        </li>
                        <li>
                          <i className="material-icons">attach_money</i>
                          <span>
                            Rp &nbsp;
                            {this.props.harga1}
                            /Pax
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="col s12 paragraph"
                      style={{ marginTop: "23px" }}
                    >
                      {this.props.deskripsi1}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col s4">
            <div class="card horizontal z-depth-3">
              <div class="card-stacked">
                <div class="card-content">
                  <div className="col s12">
                    <p style={{ fontWeight: "800" }}>{this.props.nama2}</p>
                  </div>
                  <div className="row">
                    <div className="col s12">
                      <ul>
                        <li>
                          <i className="material-icons">location_on</i>
                          {this.props.alamat2}
                        </li>
                        <li>
                          <i className="material-icons">attach_money</i>
                          <span>
                            Rp &nbsp;
                            {this.props.harga2}
                            /Pax
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="col s12 paragraph"
                      style={{ marginTop: "23px" }}
                    >
                      {this.props.deskripsi2}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12">
            <h5 className="right">Rp {this.props.total}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export class TotalPriceCart extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col s12 center-align">
            <div
              style={{ display: "inline-block", marginRight: "65px" }}
              className="right"
            >
              <span class="black-text">
                <h5>Total Price: Rp {this.props.total}</h5>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
