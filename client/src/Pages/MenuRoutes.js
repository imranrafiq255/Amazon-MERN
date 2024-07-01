import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loadCustomerData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "/api/v1/customer/load-current-customer"
        );
        setCustomer(response?.data?.customer);
        setLoading(false);
      } catch (error) {
        console.log(error?.response?.data?.message);
        setLoading(false);
      }
    };
    loadCustomerData();
  }, []);
  console.log(customer);
  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <BarLoader />
      </div>
    );
  }
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              customer ? (
                <HomePage cartItems={cartItems} setCartItems={setCartItems} />
              ) : (
                <SignIn />
              )
            }
          />
          <Route path="/hotoffers" element={<HotOffers />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/men"
            element={<Men cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default MenuRoutes;
