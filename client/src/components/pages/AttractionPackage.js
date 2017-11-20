import React, { Component } from "react";
import AttractionPackageCard from "../modules/Attraction/AttractionPackageCard";
import { fetchAttractions, addOrderAttraction } from "../../actions/actions";
import { store } from "../../index";
import { connect } from "react-redux";

class AttractionPackage extends Component {
  componentDidMount() {}

  render() {
    const Package1 = [
      {
        nama: "Waterbom",
        alamat: "hehe",
        harga: "hehe",
        deskripsi: "hehe"
      },
      {
        nama: "Pantai Kuta",
        alamat: "hehe",
        harga: "hehe",
        deskripsi: "hehe"
      },
      {
        nama: "Sagan",
        alamat: "hehe",
        harga: "hehe",
        deskripsi: "hehe"
      }
    ];
    const Package2 = [
      {
        nama: "Tomaha",
        alamat: "hehe",
        harga: "hehe",
        deskripsi: "hehe"
      },
      {
        nama: "Liquid",
        alamat: "hehe",
        harga: "hehe",
        deskripsi: "hehe"
      },
      {
        nama: "Bosche",
        alamat: "hehe",
        harga: "hehe",
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
                console.log(Package1, "ORDERKUU");
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
              // onClick={this.onClick}
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
  fetchAttractions,
  addOrderAttraction
})(AttractionPackage);
