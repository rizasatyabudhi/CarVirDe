import React, { Component } from "react";
import { connect } from "react-redux";
import { addCar } from "../../../actions/actions";

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
    this.props.addCar(this.state).then(() => {
      alert("SUCCESS");
    });
  }

  render() {
    return (
      <div className="row ">
        <form className="col s12 center-align">
          <div className="card-panel z-depth-2" style={{ marginTop: "3em" }}>
            <div className="col s12">
              <h2>Add Car</h2>
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
                <label style={{ marginTop: "-30px" }}>Harga/hari</label>
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

function mapStateToProps(state) {
  return { state };
}
export default connect(mapStateToProps, { addCar })(AddCarForm);
