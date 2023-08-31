import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { blogrApi } from "./redux/api/apiSlice.js";
import App from "./App.jsx";
import "./styles/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <ApiProvider api={blogrApi}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiProvider>
  // </React.StrictMode>
);
