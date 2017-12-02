import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import "./firebase/firebase";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import "materialize-css/dist/css/materialize.min.css";
import reducers from "./reducers/index";

const httpLink = new HttpLink({
  uri: "https://api.graph.cool/simple/v1/cjahuxkq12sjj01798iw32tcg"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  dataIdFromObject: o => o.id
});

export const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);
window.store = store;

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
