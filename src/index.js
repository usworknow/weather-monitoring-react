import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import persistStore from "persistStore";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={persistStore().store}>
    <PersistGate loading={null} persistor={persistStore().persistor}>
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.querySelector("#root")
);
