import axios from "axios";
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

// export function fetchCars() {
//   const request = axios.get(`${baseURL}/cars`);
//   return {
//     type: "FETCH_CARS",
//     payload: request
//   };
// }
