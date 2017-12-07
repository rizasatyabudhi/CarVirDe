import React, { Component } from "react";
import { connect } from "react-redux";
import CarCard from "../modules/Car Rent/CarCard";
import Alert from "react-s-alert";
import {
  fetchCars,
  fetchAttractions,
  addOrderCar,
  startFetchCars
} from "../../actions/actions";
import { store } from "../../index";
import { Link } from "react-router-dom";

import gql from "graphql-tag";
import { graphql } from "react-apollo";

class RentCar extends Component {
  render() {
    const { allCars } = this.props.data;
    const { orders } = store.getState();
    return (
      <div className="container">
        <div className="row">
          {allCars ? (
            allCars.map((car, index) => {
              return (
                <CarCard
                  foto={car.foto}
                  tipe={car.tipe}
                  merk={car.merk}
                  transmisi={car.transmisi}
                  tahun={car.tahun}
                  kapasitas={car.kapasitas}
                  harga={car.harga}
                  alamat={car.alamat}
                  onClick={e => {
                    e.preventDefault();
                    Alert.success("Berhasil ditambah ke keranjang", {
                      position: "bottom-right",
                      effect: "jelly",
                      timeout: 2500
                    });
                    this.props.addOrderCar(car);
                  }}
                />
              );
            })
          ) : (
            <div>Loading...</div>
          )}

          {orders.length == 0 ? null : (
            <div>
              <div className="row">
                <div className="col s12 center-align">
                  <h5> Beli Tiket Tempat Wisata? </h5>
                </div>
              </div>
              <div className="row">
                <div className="col s6 center-align">
                  <Link to={"/attraction"}>
                    <button class="btn waves-effect waves-light">Ya</button>
                  </Link>
                </div>
                <div className="col s6 center-align">
                  <Link to={"/cart"}>
                    <button class="btn waves-effect waves-light">Tidak</button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const query = gql`
  {
    allCars {
      merk
      tipe
      tahun
      foto
      transmisi
      kapasitas
      harga
      alamat
    }
  }
`;

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps, { addOrderCar })(
  graphql(query)(RentCar)
);
