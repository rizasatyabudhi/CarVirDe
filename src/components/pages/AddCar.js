import React, { Component } from "react";
import AddCarForm from "../modules/Forms/AddCarForm";
import { Link } from "react-router-dom";

export default class AddCar extends Component {
  render() {
    return (
      <div className="container">
        <AddCarForm />
        <div className="row">
          <div className="col s12">
            <Link to={"/addDriver"}>
              <button class="btn waves-effect waves-light">Tambah Supir</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
