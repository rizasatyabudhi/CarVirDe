import React, { Component } from "react";
import AttractionCard from "../modules/Attraction/AttractionCard";
import { fetchAttractions, addOrderAttraction } from "../../actions/actions";
import { store } from "../../index";
import { connect } from "react-redux";

class Attraction extends Component {
  componentDidMount() {
    this.props.fetchAttractions();
  }

  render() {
    const { attractions } = store.getState();
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
                  onClick={e => {
                    e.preventDefault();
                    this.props.addOrderAttraction(attraction);
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
