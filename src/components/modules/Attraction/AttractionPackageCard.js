import React, { Component } from "react";

export default class AttractionPackageCard extends Component {
  render() {
    return (
      <div>
        <div class="col s4">
          <div class="card horizontal z-depth-3">
            <div class="card-stacked">
              <div class="card-content">
                <div className="col s12">
                  <p style={{ fontWeight: "800" }}>{this.props.nama}</p>
                </div>
                <div className="row">
                  <div className="col s12">
                    <ul>
                      <li>
                        <i className="material-icons">location_on</i>
                        {this.props.alamat}
                      </li>
                      <li>
                        <i className="material-icons">attach_money</i>
                        <span>
                          Rp &nbsp;
                          {this.props.harga}
                          /Pax
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="col s12 paragraph"
                    style={{ marginTop: "23px" }}
                  >
                    {this.props.deskripsi}
                  </div>
                </div>
              </div>
              {/*   <div class="card-action">
                <a href="#">This is a link</a>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
