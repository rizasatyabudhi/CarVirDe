import React, { Component } from "react";
import AttractionPackageCard from "../modules/Attraction/AttractionPackageCard";
import { addOrderAttractionPackage } from "../../actions/actions";
import { store } from "../../index";
import { connect } from "react-redux";

class AttractionPackage extends Component {
  componentDidMount() {}

  render() {
    const Package1 = [
      {
        nama: "Burjo",
        alamat: "hehe",
        harga: "85000",
        deskripsi: "hehe",
        total: "255000"
      },
      {
        nama: "Kantin MIPA",
        alamat: "hehe",
        harga: "70000",
        deskripsi: "hehe"
      },
      {
        nama: "Kindai",
        alamat: "hehe",
        harga: "100000",
        deskripsi: "hehe"
      }
    ];
    const Package2 = [
      {
        nama: "Nasi Uduk Palagan",
        alamat: "hehe",
        harga: "65000",
        deskripsi: "hehe",
        total: "215000"
      },
      {
        nama: "Preksu",
        alamat: "hehe",
        harga: "70000",
        deskripsi: "hehe"
      },
      {
        nama: "Krisbar",
        alamat: "hehe",
        harga: "80000",
        deskripsi: "hehe"
      }
    ];

    const coba = Package1.map(value => {
      return value.nama;
    });
    console.log(coba);
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h3>Package 1</h3>
            <button
              style={{ marginBottom: "20px" }}
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={e => {
                e.preventDefault();
                this.props.addOrderAttractionPackage(Package1);
              }}
            >
              Add to Cart
              <i class="material-icons right">add_shopping_cart</i>
            </button>
          </div>
          {Package1.map((value, index) => {
            return (
              <AttractionPackageCard
                nama={value.nama}
                alamat={value.alamat}
                harga={value.harga}
                deskripsi={value.deskripsi}
              />
            );
          })}
        </div>
        <div className="row">
          <div className="col s12">
            <h3>Package 2</h3>
            <button
              style={{ marginBottom: "20px" }}
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={e => {
                e.preventDefault();
                this.props.addOrderAttractionPackage(Package2);
              }}
            >
              Add to Cart
              <i class="material-icons right">add_shopping_cart</i>
            </button>
          </div>
          {Package2.map((value, index) => {
            return (
              <AttractionPackageCard
                nama={value.nama}
                alamat={value.alamat}
                harga={value.harga}
                deskripsi={value.deskripsi}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}
export default connect(mapStateToProps, {
  addOrderAttractionPackage
})(AttractionPackage);
