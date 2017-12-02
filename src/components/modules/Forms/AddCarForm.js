import React, { Component } from "react";
import { connect } from "react-redux";
import { addCar, startAddCar } from "../../../actions/actions";
import Alert from "react-s-alert";

import gql from "graphql-tag";
import { graphql } from "react-apollo";

class AddCarForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipe: "",
      merk: "",
      tahun: "",
      transmisi: "",
      kapasitas: "",
      harga: "",
      alamat: "",
      foto: ""
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.mutate({
      variables: {
        tipe: this.state.tipe,
        merk: this.state.merk,
        tahun: this.state.tahun,
        transmisi: this.state.transmisi,
        kapasitas: this.state.kapasitas,
        harga: this.state.harga,
        alamat: this.state.alamat,
        foto: this.state.foto
      }
    });
    Alert.success("Berhasil Tambah Mobil", {
      position: "bottom-right",
      effect: "jelly",
      beep: "http://s-alert-demo.meteorapp.com/beep.mp3",
      timeout: 2500
    });
    // .then(() => this.props.data.refetch());
  }

  render() {
    return (
      <div className="row ">
        <form className="col s12 center-align">
          <div className="card-panel z-depth-2" style={{ marginTop: "3em" }}>
            <div className="col s12">
              <h2>Tambah Mobil Rental</h2>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <label style={{ marginTop: "-30px" }}>Tipe Mobil</label>
                <input
                  type="text"
                  onChange={e => this.setState({ tipe: e.target.value })}
                />
              </div>
              <div className="input-field col s6">
                <label style={{ marginTop: "-30px" }}>Merk Mobil</label>
                <input
                  type="text"
                  onChange={e => this.setState({ merk: e.target.value })}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <label style={{ marginTop: "-30px" }}>Tahun</label>
                <input
                  type="text"
                  onChange={e => this.setState({ tahun: e.target.value })}
                />
              </div>
              <div className="input-field col s6">
                <label style={{ marginTop: "-30px" }}>Transmisi</label>
                <input
                  type="text"
                  onChange={e => this.setState({ transmisi: e.target.value })}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <label style={{ marginTop: "-30px" }}>Kapasitas</label>
                <input
                  type="text"
                  onChange={e => this.setState({ kapasitas: e.target.value })}
                />
              </div>
              <div className="input-field col s6">
                <label style={{ marginTop: "-30px" }}>Harga /hari</label>
                <input
                  type="text"
                  onChange={e => this.setState({ harga: e.target.value })}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <label style={{ marginTop: "-30px" }}>Alamat</label>
                <input
                  type="text"
                  onChange={e => this.setState({ alamat: e.target.value })}
                />
              </div>
              <div className="input-field col s12">
                <label style={{ marginTop: "-30px" }}>Upload Foto Mobil</label>
                <input
                  type="text"
                  onChange={e => this.setState({ foto: e.target.value })}
                />
              </div>
            </div>
            <button
              className="btn deep-purple darken-3 waves-effect waves-light"
              onClick={this.onFormSubmit}
            >
              Submit <i class="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation addCar(
    $foto: String
    $harga: String
    $kapasitas: String
    $merk: String
    $tipe: String
    $tahun: String
    $transmisi: String
  ) {
    createCar(
      foto: $foto
      harga: $harga
      kapasitas: $kapasitas
      merk: $merk
      tipe: $tipe
      tahun: $tahun
      transmisi: $transmisi
    ) {
      merk
      tipe
    }
  }
`;

// export default connect(mapStateToProps, { addCar, startAddCar })(AddCarForm);
export default graphql(mutation)(AddCarForm);
