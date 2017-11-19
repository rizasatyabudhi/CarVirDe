import React, { Component } from "react";
import { connect } from "react-redux";
import { addAttraction } from "../../../actions/actions";

class AddAttractionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "",
      harga: "",
      alamat: "",
      deskripsi: "",
      foto: ""
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    this.props.addAttraction(this.state).then(() => {
      alert("SUCCESS");
    });
  }
  render() {
    return (
      <div className="row ">
        <form className="col s12 center-align">
          <div className="card-panel z-depth-2" style={{ marginTop: "3em" }}>
            <div className="col s12">
              <h2>Tambah Tempat Wisata</h2>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <label style={{ marginTop: "-30px" }}>Nama Tempat Wisata</label>
                <input
                  type="text"
                  onChange={e => this.setState({ nama: e.target.value })}
                />
              </div>
              <div className="input-field col s6">
                <label style={{ marginTop: "-30px" }}>Harga /pax</label>
                <input
                  type="text"
                  onChange={e => this.setState({ harga: e.target.value })}
                />
              </div>
              <div className="input-field col s12">
                <label style={{ marginTop: "-30px" }}>Alamat</label>
                <input
                  type="text"
                  onChange={e => this.setState({ alamat: e.target.value })}
                />
              </div>
              <div className="input-field col s12">
                <label style={{ marginTop: "-30px" }}>Deskripsi Tempat</label>
                <input
                  type="text"
                  onChange={e => this.setState({ deskripsi: e.target.value })}
                />
              </div>
              <div className="input-field col s12">
                <label style={{ marginTop: "-30px" }}>Upload Foto Tempat</label>
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
export default connect(mapStateToProps, { addAttraction })(AddAttractionForm);
