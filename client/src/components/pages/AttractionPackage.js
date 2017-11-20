import React, { Component } from "react";
import AttractionPackageCard from "../modules/Attraction/AttractionPackageCard";
import { addOrderAttractionPackage } from "../../actions/actions";
import { store } from "../../index";
import { connect } from "react-redux";
import Alert from "react-s-alert";

class AttractionPackage extends Component {
  componentDidMount() {}

  render() {
    const { orders } = store.getState();
    const Package1 = [
      {
        nama: "Ullen Sentalu Museum",
        alamat: "hehe",
        harga: "85000",
        deskripsi: "hehe",
        total: "255000"
      },
      {
        nama: "Merapi Lava Tour",
        alamat: "hehe",
        harga: "70000",
        deskripsi: "hehe"
      },
      {
        nama: "Jomblang Cave",
        alamat: "hehe",
        harga: "100000",
        deskripsi: "hehe"
      }
    ];
    const Package2 = [
      {
        nama: "Sewu Temple",
        alamat: "hehe",
        harga: "65000",
        deskripsi: "hehe",
        total: "215000"
      },
      {
        nama: "Keraton Jogja",
        alamat: "hehe",
        harga: "70000",
        deskripsi: "hehe"
      },
      {
        nama: "Hutan Pinus Imogiri",
        alamat: "hehe",
        harga: "80000",
        deskripsi: "hehe"
      }
    ];
    if (orders.attraction) {
      return (
        <div className="center align">
          <h4 style={{ height: "100vh" }}>
            Anda Sudah Memilih Untuk Tidak Menggunakan Paket
          </h4>
        </div>
      );
    }
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
                Alert.success("Added to Cart", {
                  position: "bottom-right",
                  effect: "jelly",
                  beep: false,
                  timeout: 2000,
                  onShow: () => {
                    this.props.addOrderAttractionPackage(Package1);
                  }
                });
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
                Alert.success("Added to Cart", {
                  position: "bottom-right",
                  effect: "jelly",
                  beep: false,
                  timeout: 2000,
                  onShow: () => {
                    this.props.addOrderAttractionPackage(Package2);
                  }
                });
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
