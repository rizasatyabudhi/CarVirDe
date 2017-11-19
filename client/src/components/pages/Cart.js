import React, { Component } from "react";
import { CarCart, AttractionCart, TotalPriceCart } from "../modules/CartCard";
import { connect } from "react-redux";
import { store } from "../../index";
import CarCard from "../modules/Car Rent/CarCard";

class Cart extends Component {
  render() {
    const { attraction = "", car = "" } = store.getState().orders;
    function calculateTotal() {
      return attraction
        ? parseInt(attraction.harga) + parseInt(car.harga)
        : 0 + parseInt(car.harga);
    }
    console.log(calculateTotal());

    console.log(calculateTotal, "HARGA GW");
    if (!car) {
      return <h4 style={{ height: "100vh" }}>Belanja dulu gan</h4>;
    }
    return (
      <div className="container">
        <h4>Your Orders</h4>
        <div class="row">
          <CarCart
            tipe={car.tipe}
            merk={car.merk}
            tahun={car.tahun}
            transmisi={car.transmisi}
            harga={car.harga}
          />
          {attraction && (
            <AttractionCart
              nama={attraction.nama}
              alamat={attraction.alamat}
              harga={attraction.harga}
            />
          )}
          <TotalPriceCart total={calculateTotal()} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}
export default connect(mapStateToProps, {})(Cart);
