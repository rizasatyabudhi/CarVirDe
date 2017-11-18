import React, { Component } from "react";

export default class CarCard extends Component {
  render() {
    return (
      <div>
        <div className="col s6">
          <div className="card hoverable">
            <div className="card-image">
              <img
                src={this.props.image}
                style={{ width: "460.89px", height: "280px" }}
              />
              <span className="card-title">{this.props.title}</span>
              <a className="btn-floating halfway-fab waves-effect waves-light purple z-depth-4">
                <i className="material-icons">add_shopping_cart</i>
              </a>
            </div>
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
                    <li>
                      <div className="row">
                        <div className="col s12">
                          <span className="category">Kapasitas &nbsp;: </span>
                          {this.props.kapasitas}
                          orang
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
                    <li>
                      <div className="row">
                        <div className="col s12">
                          <span className="category">Harga /hari &nbsp;:</span>
                          {this.props.harga}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <span className="category">Alamat &nbsp;: </span>
                  {this.props.alamat}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
