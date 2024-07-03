import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignIn from "./SignIn";
import Orders from "./Orders";
import Products from "./Products";
import AddProduct from "./AddProduct";
import BarLoader from "../../Loaders/BarLoader";
import axios from "axios";

function MenuRoutes() {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCustomerData = async () => {
      try {
        const response = await axios.get("/api/v1/admin/load-current-admin");
        setAdmin(response?.data?.admin);
      } catch (error) {
        console.log(error?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };
    loadCustomerData();
  }, []);

  if (loading) {
    return (
      <div
        className="w-screen h-screen flex justify-center items-center"
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BarLoader />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/admin-signin" element={<SignIn />} />
        <Route
          path="/admin-orders"
          element={admin ? <Orders /> : <Navigate to="/admin-signin" />}
        />
        <Route
          path="/admin-products"
          element={admin ? <Products /> : <Navigate to="/admin-signin" />}
        />
        <Route
          path="/admin-add-product"
          element={admin ? <AddProduct /> : <Navigate to="/admin-signin" />}
        />
      </Routes>
    </Router>
  );
}

export default MenuRoutes;
