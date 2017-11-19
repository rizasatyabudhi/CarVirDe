import React, { Component } from "react";

export default class AddCarForm extends Component {
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
                <input type="text" />
              </div>
              <div className="input-field col s6">
                <label style={{ marginTop: "-30px" }}>Merk Mobil</label>
                <input type="text" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <label style={{ marginTop: "-30px" }}>Merk Mobil</label>
                <input type="text" />
              </div>
              <div className="input-field col s6">
                <label style={{ marginTop: "-30px" }}>Transmisi</label>
                <input type="text" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <label style={{ marginTop: "-30px" }}>Kapasitas</label>
                <input type="text" />
              </div>
              <div className="input-field col s6">
                <label style={{ marginTop: "-30px" }}>Harga/hari</label>
                <input type="text" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <label style={{ marginTop: "-30px" }}>Alamat</label>
                <input type="text" />
              </div>
            </div>
            <div class="file-field input-field">
              <div class="btn">
                <span>Upload Foto Mobil</span>
                <input type="file" />
              </div>
              <div class="file-path-wrapper">
                <input class="file-path validate" type="text" />
              </div>
            </div>
            <button className="btn deep-purple darken-3 waves-effect waves-light">
              Submit <i class="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
