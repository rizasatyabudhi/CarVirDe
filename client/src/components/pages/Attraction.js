import React, { Component } from "react";
import AttractionCard from "../modules/Attraction/AttractionCard";
import {
  addOrderAttraction,
  startFetchAttractions
} from "../../actions/actions";
import { store } from "../../index";
import { connect } from "react-redux";
import Alert from "react-s-alert";
import { Link } from "react-router-dom";

class Attraction extends Component {
  componentDidMount() {
    this.props.startFetchAttractions();
  }

  render() {
    const { attractions, orders } = store.getState();

    if (orders.attractionPackage) {
      return (
        <div className="center align">
          <h4 style={{ height: "100vh" }}>
            Anda Sudah Memilih Menggunakan Travel Package
          </h4>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="row">
          {attractions ? (
            attractions.map((attraction, index) => {
              return (
                <AttractionCard
                  nama={attraction.nama}
                  alamat={attraction.alamat}
                  harga={attraction.harga}
                  deskripsi={attraction.deskripsi}
                  foto={attraction.foto}
                  // onClick={e => {
                  //   e.preventDefault();
                  //   !orders.attractionPackage
                  //     ? this.props.addOrderAttraction(attraction)
                  //     : alert("You have selected with travel package");
                  // }
                  onClick={e => {
                    e.preventDefault();
                    Alert.success("Berhasil ditambah ke keranjang", {
                      position: "bottom-right",
                      effect: "jelly",
                      beep: "http://s-alert-demo.meteorapp.com/beep.mp3",
                      timeout: 2500,
                      onShow: () => {
                        this.props.addOrderAttraction(attraction);
                      }
                    });
                  }}
                />
              );
            })
          ) : (
            <div>Loading...</div>
          )}
          <div>
            <div className="row">
              <div className="col s12 center-align">
                <h5> Bingung Memilih Tempat Wisata?</h5>
              </div>
            </div>
            <div className="row">
              <div className="col s12 center-align">
                <Link to={"/attractionPackage"}>
                  <button class="btn waves-effect waves-light">
                    Lihat Paket Wisata Kami
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}
export default connect(mapStateToProps, {
  startFetchAttractions,
  addOrderAttraction
})(Attraction);
