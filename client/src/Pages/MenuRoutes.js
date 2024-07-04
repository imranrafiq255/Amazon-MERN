import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Cart from "./Cart";
import Men from "./Men";
import HomePage from "./HomePage";
import HotOffers from "./HotOffers";
import SignIn from "./SignIn";
import Register from "./Register";
import axios from "axios";
import BarLoader from "../Loaders/BarLoader";

function MenuRoutes() {
  const [cartItems, setCartItems] = useState([]);
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCustomerData = async () => {
      try {
        const response = await axios.get(
          "/api/v1/customer/load-current-customer"
        );
        setCustomer(response?.data?.customer);
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
        <Route
          path="/"
          element={
            customer ? (
              <HomePage cartItems={cartItems} setCartItems={setCartItems} />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/hotoffers"
          element={customer ? <HotOffers /> : <Navigate to="/signin" />}
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/men"
          element={
            customer ? (
              <Men cartItems={cartItems} setCartItems={setCartItems} />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/cart"
          element={
            customer ? (
              <Cart cartItems={cartItems} setCartItems={setCartItems} />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default MenuRoutes;
