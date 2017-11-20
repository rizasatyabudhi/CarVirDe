import React, { Component } from "react";
import AttractionCard from "../modules/Attraction/AttractionCard";
import { fetchAttractions, addOrderAttraction } from "../../actions/actions";
import { store } from "../../index";
import { connect } from "react-redux";
import Alert from "react-s-alert";

class Attraction extends Component {
  componentDidMount() {
    this.props.fetchAttractions();
  }

  render() {
    const { attractions, orders } = store.getState();

    if (orders.attractionPackage) {
      return (
        <div className="center align">
          <h4 style={{ height: "100vh" }}>Gakboleh</h4>
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
                    Alert.success("Added to Cart", {
                      position: "bottom-right",
                      effect: "jelly",
                      beep: false,
                      timeout: 2000,
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
})(Attraction);
