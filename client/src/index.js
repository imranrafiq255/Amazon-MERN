import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MenuRoutes from "./Pages/MenuRoutes";
import AdminMenuRoutes from "../src/Admin Pages/Pages/MenuRoutes";
import { MultiDataProvider } from "./ContextAPI/MultiDataContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MultiDataProvider>
      <MenuRoutes />
      <AdminMenuRoutes />
    </MultiDataProvider>
  </React.StrictMode>
);
