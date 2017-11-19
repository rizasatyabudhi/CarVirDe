import React, { Component } from "react";
import { connect } from "react-redux";
import CarCard from "../modules/Car Rent/CarCard";
import {
  fetchCars,
  fetchAttractions,
  addOrderCar
} from "../../actions/actions";
import { store } from "../../index";

class RentCar extends Component {
  componentDidMount() {
    this.props.fetchCars();
  }

  render() {
    const { cars } = store.getState();
    return (
      <div className="container">
        <div className="row">
          {cars ? (
            cars.map((car, index) => {
              return (
                <CarCard
                  // image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/2014_Honda_Jazz_%28GK5_MY15%29_VTi-L_hatchback_%282016-01-04%29_01.jpg/1200px-2014_Honda_Jazz_%28GK5_MY15%29_VTi-L_hatchback_%282016-01-04%29_01.jpg"
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
                    this.props.addOrderCar(car);
                  }}
                />
              );
            })
          ) : (
            <div>Loading...</div>
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
  addOrderCar
})(RentCar);
