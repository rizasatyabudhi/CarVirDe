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

export class RentCar extends Component {
  componentDidMount() {
    this.props.startFetchCars();
  }

  render() {
    const { cars, orders } = store.getState();
    return (
      <div className="container">
        <div className="row">
          {cars ? (
            cars.map((cars, index) => {
              return (
                <CarCard
                  // image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/2014_Honda_Jazz_%28GK5_MY15%29_VTi-L_hatchback_%282016-01-04%29_01.jpg/1200px-2014_Honda_Jazz_%28GK5_MY15%29_VTi-L_hatchback_%282016-01-04%29_01.jpg"
                  foto={cars.foto}
                  tipe={cars.tipe}
                  merk={cars.merk}
                  transmisi={cars.transmisi}
                  tahun={cars.tahun}
                  kapasitas={cars.kapasitas}
                  harga={cars.harga}
                  alamat={cars.alamat}
                  // onClick={e => {
                  //   e.preventDefault();
                  //   this.props.addOrderCar(cars);
                  // }}
                  onClick={e => {
                    e.preventDefault();
                    Alert.success("Berhasil ditambah ke keranjang", {
                      position: "bottom-right",
                      effect: "jelly",
                      beep: "http://s-alert-demo.meteorapp.com/beep.mp3",
                      timeout: 2500
                      // offset: 100
                    });
                    this.props.addOrderCar(cars);
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

function mapStateToProps(state) {
  return { state };
}
export default connect(mapStateToProps, {
  fetchCars,
  fetchAttractions,
  addOrderCar,
  startFetchCars
})(RentCar);
