import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./redux/api/apiSlice.js";
import store from "./redux/api/Store.js";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./styles/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <ApiProvider api={apiSlice}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </ApiProvider> */}
  </Provider>
  // </React.StrictMode>
);
