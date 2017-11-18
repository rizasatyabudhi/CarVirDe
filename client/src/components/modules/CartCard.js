import React, { Component } from "react";

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
              <h5>Rp 500.000</h5>
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laudantium delectus est, aliquam minima a excepturi, facere sequi
              similique doloremque eos molestias quod ad eius temporibus saepe
              totam nihil asperiores iste!
            </div>
            <div className="col s2">
              <h5>Rp 200.000</h5>
            </div>
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
              class="card-panel teal z-depth-4"
              style={{ width: "300px", display: "inline-block" }}
            >
              <span class="white-text">
                <h5>
                  Total Price: <br /> Rp 700.000
                </h5>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
