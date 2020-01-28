import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import "./configs/ReactotronConfig";
import history from "./services/history";

import { ToastContainer } from "react-toastify";

import GlobalStyles from "./configs/GlobalStyles";
import Header from "./components/Header";
import Routes from "./routes";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
