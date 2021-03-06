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

import gql from "graphql-tag";
import { graphql } from "react-apollo";
import faker from "faker";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      book: ""
    };
    this.onBookClick = this.onBookClick.bind(this);
  }

  onBookClick(e) {
    e.preventDefault();
    this.setState({ book: shortid.generate() }, () => {
      this.props.mutate({
        variables: {
          nama: faker.name.firstName(),
          bookingCode: this.state.book
        }
      });
    });
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
          Anda Belum Menambah Item ke Keranjang
        </h4>
      );
    }

    return (
      <div className="container">
        <h4>Orderan Anda</h4>
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
            onClick={this.onBookClick}
          >
            Bayar
          </button>
        </div>
      </div>
    );
  }
}

const mutation = gql`
  mutation addBooking($nama: String!, $bookingCode: String) {
    createCustomer(nama: $nama, bookingCode: $bookingCode) {
      id
    }
  }
`;

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps, {})(graphql(mutation)(Cart));
