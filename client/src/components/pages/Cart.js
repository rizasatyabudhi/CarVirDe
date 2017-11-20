import React, { Component } from "react";
import {
  CarCart,
  AttractionCart,
  AttractionPackageCart,
  TotalPriceCart,
  BookId
} from "../modules/CartCard";
import { connect } from "react-redux";
import { store } from "../../index";
import shortid from "shortid";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      book: ""
    };
  }

  render() {
    const {
      attraction = "",
      car = "",
      attractionPackage = ""
    } = store.getState().orders;

    function generateBook(e) {
      e.preventDefault;
      this.setState({ book: shortid.generate() });
    }

    function calculateTotalWithoutPackage() {
      return attraction
        ? parseInt(attraction.harga) + parseInt(car.harga)
        : 0 + parseInt(car.harga);
    }

    function calculateTotalWithPackage() {
      return attractionPackage
        ? parseInt(attractionPackage[0].total) + parseInt(car.harga)
        : 0 + parseInt(car.harga);
    }

    if (!car) {
      return (
        <h4 style={{ height: "100vh" }} className="center align">
          Belanja dulu gan
        </h4>
      );
    }

    // const coba = attractionPackage.map((value, index) => {
    //   return value.nama;
    // });

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
          {attractionPackage && (
            <AttractionPackageCart
              nama0={attractionPackage[0].nama}
              alamat0={attractionPackage[0].alamat}
              harga0={attractionPackage[0].harga}
              nama1={attractionPackage[1].nama}
              alamat1={attractionPackage[1].alamat}
              harga1={attractionPackage[1].harga}
              nama2={attractionPackage[2].nama}
              alamat2={attractionPackage[2].alamat}
              harga2={attractionPackage[2].harga}
              total={attractionPackage[0].total}
            />
          )}

          {/* <TotalPriceCart total={ calculateTotal()} />*/}

          <TotalPriceCart
            total={
              attraction
                ? calculateTotalWithoutPackage()
                : calculateTotalWithPackage()
            }
          />
          <BookId book={this.state.book} />
          <button
            class="btn waves-effect waves-light"
            name="action"
            onClick={e => {
              e.preventDefault();
              this.setState({ book: shortid.generate() });
            }}
          >
            Bayar
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}
export default connect(mapStateToProps, {})(Cart);
