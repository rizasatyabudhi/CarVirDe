// we name it index.js so we can import it directly
import { combineReducers } from "redux";
import { cars, attractions, orders } from "../reducers/api";

// whatever key inside this object, represent the keys in our state object
export default combineReducers({
  cars,
  attractions,
  orders
});
