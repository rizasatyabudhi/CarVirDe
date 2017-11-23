import axios from "axios";
import uuid from "uuid";
import * as firebase from "firebase";
import database from "../firebase/firebase";
import { store } from "../index";
const baseURL = "http://localhost:4000";

//////////// CARS //////////////
export const addCar = payload => ({
  type: "ADD_CARS",
  payload
});

export const startAddCar = (props = {}) => {
  return dispatch => {
    const {
      tipe = "",
      merk = "",
      kapasitas = "",
      transmisi = "",
      tahun = "",
      harga = "",
      alamat = "",
      foto = ""
    } = props;
    const car = {
      tipe,
      merk,
      kapasitas,
      transmisi,
      tahun,
      harga,
      alamat,
      foto
    };
    database
      .ref("cars")
      .push(car)
      .then(ref => {
        dispatch(
          addCar({
            id: ref.key,
            ...car
          })
        );
      });
  };
};

export const fetchCars = payload => ({
  type: "FETCH_CARS",
  payload
});

export const startFetchCars = (props = {}) => {
  return dispatch => {
    return database.ref("cars").on("value", snapshot => {
      const cars = [];
      snapshot.forEach(childSnapshot => {
        cars.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(fetchCars(cars));
    });
  };
};

//////// ATTRACTIONS //////////////
export const addAttraction = payload => ({
  type: "ADD_ATTRACTION",
  payload
});

export const startAddAttraction = (props = {}) => {
  return dispatch => {
    const {
      nama = "",
      harga = "",
      alamat = "",
      deskripsi = "",
      foto = ""
    } = props;
    const attraction = {
      nama,
      harga,
      alamat,
      deskripsi,
      foto
    };
    database
      .ref("attractions")
      .push(attraction)
      .then(ref => {
        dispatch(
          addAttraction({
            id: ref.key,
            ...attraction
          })
        );
      });
  };
};
export const fetchAttractions = payload => ({
  type: "FETCH_ATTRACTIONS",
  payload
});

export const startFetchAttractions = (props = {}) => {
  return dispatch => {
    return database.ref("attractions").on("value", snapshot => {
      const attractions = [];
      snapshot.forEach(childSnapshot => {
        attractions.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(fetchAttractions(attractions));
    });
  };
};

/////////// ORDERS ///////////////
export function addOrderCar(props) {
  return function(dispatch) {
    store.dispatch({
      type: "CREATE_ORDER_CAR",
      payload: props
    });
  };
}

export function addOrderAttraction(props) {
  return function(dispatch) {
    store.dispatch({
      type: "CREATE_ORDER_ATTRACTION",
      payload: props
    });
  };
}

export function addOrderAttractionPackage(props) {
  return function(dispatch) {
    store.dispatch({
      type: "CREATE_ORDER_ATTRACTION_PACKAGE",
      payload: props
    });
  };
}

/////////////// MOCK DATABASE //////////////////
// export function fetchCars() {
//   return function(dispatch) {
//     return axios({
//       method: "GET",
//       url: `${baseURL}/cars`,
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//       }
//     }).then(res => {
//       store.dispatch({
//         type: "FETCH_CARS",
//         payload: res.data
//       });
//       return res;
//     });
//   };
// }

// export function fetchAttractions() {
//   return function(dispatch) {
//     return axios({
//       method: "GET",
//       url: `${baseURL}/attractions`,
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//       }
//     }).then(res => {
//       store.dispatch({
//         type: "FETCH_ATTRACTIONS",
//         payload: res.data
//       });
//       return res;
//     });
//   };
// }

// export function addCar(props) {
//   return function(dispatch) {
//     return axios({
//       method: "POST",
//       url: `${baseURL}/cars`,
//       headers: {
//         "Content-Type": "application/json"
//       },
//       data: {
//         tipe: props.tipe,
//         merk: props.merk,
//         kapasitas: props.kapasitas,
//         transmisi: props.transmisi,
//         tahun: props.tahun,
//         harga: props.harga,
//         alamat: props.alamat,
//         foto: props.foto,
//         id: uuid()
//       }
//     }).then(() => console.log("success submit"));
//   };
// }

// export function addAttraction(props) {
//   return function(dispatch) {
//     return axios({
//       method: "POST",
//       url: `${baseURL}/attractions`,
//       headers: {
//         "Content-Type": "application/json"
//       },
//       data: {
//         nama: props.nama,
//         harga: props.harga,
//         alamat: props.alamat,
//         deskripsi: props.deskripsi,
//         foto: props.foto,
//         id: uuid()
//       }
//     }).then(() => console.log("success submit"));
//   };
// }
