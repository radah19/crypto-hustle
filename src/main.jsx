import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import DetailView from "./components/DetailView";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route index={false} path="/coinDetails/:symbol" element={<DetailView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
