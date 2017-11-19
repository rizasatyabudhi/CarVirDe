import axios from "axios";
import uuid from "uuid";
import { store } from "../index";
const baseURL = "http://localhost:4000";

export function fetchCars() {
  return function(dispatch) {
    return axios({
      method: "GET",
      url: `${baseURL}/cars`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(res => {
      store.dispatch({
        type: "FETCH_CARS",
        payload: res.data
      });
      return res;
    });
  };
}

export function fetchAttractions() {
  return function(dispatch) {
    return axios({
      method: "GET",
      url: `${baseURL}/attractions`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(res => {
      store.dispatch({
        type: "FETCH_ATTRACTIONS",
        payload: res.data
      });
      return res;
    });
  };
}

export function addCar(props) {
  return function(dispatch) {
    return axios({
      method: "POST",
      url: `${baseURL}/cars`,
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        tipe: props.tipe,
        merk: props.merk,
        kapasitas: props.kapasitas,
        transmisi: props.transmisi,
        tahun: props.tahun,
        harga: props.harga,
        alamat: props.alamat,
        foto: props.foto,
        id: uuid()
      }
    }).then(() => console.log("success submit"));
  };
}

export function addAttraction(props) {
  return function(dispatch) {
    return axios({
      method: "POST",
      url: `${baseURL}/attractions`,
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        nama: props.nama,
        harga: props.harga,
        alamat: props.alamat,
        deskripsi: props.deskripsi,
        foto: props.foto,
        id: uuid()
      }
    }).then(() => console.log("success submit"));
  };
}
