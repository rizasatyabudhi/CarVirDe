import React, { Component } from "react";

export default class AttractionCard extends Component {
  render() {
    return (
      <div class="col s12">
        <div class="card horizontal hoverable">
          <div class="card-image large">
            <img
              src={this.props.foto}
              style={{ width: "230px", height: "217px" }}
            />
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <h5 style={{ marginBottom: "20px" }}>{this.props.nama}</h5>
              <div className="row">
                <div className="col s3">
                  <ul>
                    <li>
                      <i className="material-icons">location_on</i>
                      {this.props.alamat}
                    </li>
                    <li>
                      <i className="material-icons">attach_money</i>
                      <span>
                        Rp
                        {this.props.harga}
                        /Pax
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col s9 paragraph" style={{ marginTop: "23px" }}>
                  {this.props.deskripsi}
                </div>
              </div>
            </div>

            <div class="card-action">
              <button
                class="btn waves-effect waves-light"
                type="submit"
                name="action"
                onClick={this.props.onClick}
              >
                Add to Cart
                <i class="material-icons right">add_shopping_cart</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
