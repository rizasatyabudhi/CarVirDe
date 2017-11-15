import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui/dist/semantic.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers/index";
const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(reduxThunk))
);
window.store = store;

ReactDOM.render(
  // Provider is to connect Redux with React
  // So all of our child component can access the Redux Store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
