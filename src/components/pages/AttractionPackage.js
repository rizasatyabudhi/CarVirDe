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
        alamat: "Jalan Boyong KM 25, Kaliurang",
        harga: "85000",
        deskripsi: "deskripsi",
        total: "255000"
      },
      {
        nama: "Merapi Lava Tour",
        alamat: "Jalan Kaliurang KM. 23., Pakem",
        harga: "70000",
        deskripsi: "deskripsi"
      },
      {
        nama: "Jomblang Cave",
        alamat: " Jl. Ireda, MG1 No.65/139",
        harga: "100000",
        deskripsi: "deskripsi"
      }
    ];
    const Package2 = [
      {
        nama: "Candi Sewu",
        alamat: "Jl. Raya Solo KM.15",
        harga: "65000",
        deskripsi: "deskripsi",
        total: "215000"
      },
      {
        nama: "Keraton Jogja",
        alamat: " Jalan Rotowijayan Blok No. 1",
        harga: "70000",
        deskripsi: "deskripsi"
      },
      {
        nama: "Hutan Pinus Imogiri",
        alamat: " Rotowijaya No.1, Imogiri",
        harga: "80000",
        deskripsi: "deskripsi"
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
            <h3>Paket 1</h3>
            <button
              style={{ marginBottom: "20px" }}
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={e => {
                e.preventDefault();
                Alert.success("Berhasil ditambah ke keranjang", {
                  position: "bottom-right",
                  effect: "jelly",
                  timeout: 2500,
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
            <h3>Paket 2</h3>
            <button
              style={{ marginBottom: "20px" }}
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={e => {
                e.preventDefault();
                Alert.success("Berhasil ditambah ke keranjang", {
                  position: "bottom-right",
                  effect: "jelly",
                  timeout: 2500,
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
