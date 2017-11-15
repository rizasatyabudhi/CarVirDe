import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui/dist/semantic.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

// import reducers from "./reducers/index";
// const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
l;
