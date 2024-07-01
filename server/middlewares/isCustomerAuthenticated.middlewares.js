const jwt = require("jsonwebtoken");
const { STATUS_CODES } = require("http");
const customerModel = require("../models/customer.models");
const isCustomerAuthenticated = async (req, res, next) => {
  try {
    const customerToken = req.cookies.customerToken;
    if (!customerToken) {
      return res.status(401).json({
        statusCode: STATUS_CODES[401],
        message: "Please login!",
      });
    }
    const compareToken = await jwt.verify(
      customerToken,
      process.env.CUSTOMER_SECRET_TOKEN
    );
    if (!compareToken) {
      res.clearCookie("customerToken");
      return res.status(401).json({
        statusCode: STATUS_CODES[401],
        message: "UNAUTHORIZED! Please login again!",
      });
    }
    const customer = await customerModel.findOne({ _id: compareToken._id });
    if (!customer) {
      res.clearCookie("customerToken");
      return res.status(401).json({
        statusCode: STATUS_CODES[401],
        message: "UNAUTHORIZED, Token mismatched! Please login again!",
      });
    }
    req.customer = customer;
    next();
  } catch (error) {
    res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};

module.exports = isCustomerAuthenticated;
