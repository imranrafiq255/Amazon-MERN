const express = require("express");
const singleUpload = require("../middlewares/single-image.middlewares");
const {
  signUp,
  signIn,
  loadCurrentCustomer,
  logout,
  loadProducts,
  brainTreeToken,
  brainTreePayment,
} = require("../controllers/customer.controllers");
const isCustomerAuthenticated = require("../middlewares/isCustomerAuthenticated.middlewares");

const Router = express.Router();

Router.route("/sign-up").post(singleUpload, signUp);
Router.route("/sign-in").post(signIn);
Router.route("/load-current-customer").get(
  isCustomerAuthenticated,
  loadCurrentCustomer
);
Router.route("/logout").get(isCustomerAuthenticated, logout);
Router.route("/load-products").get(loadProducts);
Router.route("/braintree/token").get(isCustomerAuthenticated, brainTreeToken);
Router.route("/braintree/payment").post(
  isCustomerAuthenticated,
  brainTreePayment
);
module.exports = Router;
