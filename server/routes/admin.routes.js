const express = require("express");
const {
  signUp,
  signIn,
  loadCurrentAdmin,
  logout,
  addProduct,
  loadOrders,
} = require("../controllers/admin.controllers");
const isAdminAuthenticated = require("../middlewares/isAdminAuthenticated.middlewares");
const singleUpload = require("../middlewares/single-image.middlewares");

const Router = express.Router();

Router.route("/sign-up").post(signUp);
Router.route("/sign-in").post(signIn);
Router.route("/load-current-admin").get(isAdminAuthenticated, loadCurrentAdmin);
Router.route("/logout").get(isAdminAuthenticated, logout);
Router.route("/add-product").post(
  isAdminAuthenticated,
  singleUpload,
  addProduct
);
Router.route("/load-orders").get(isAdminAuthenticated, loadOrders);
module.exports = Router;
