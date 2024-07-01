const jwt = require("jsonwebtoken");
const { STATUS_CODES } = require("http");
const adminModel = require("../models/admin.models");
const isAdminAuthenticated = async (req, res, next) => {
  try {
    const adminToken = req.cookies.adminToken;
    if (!adminToken) {
      return res.status(401).json({
        statusCode: STATUS_CODES[401],
        message: "Please login!",
      });
    }
    const compareToken = await jwt.verify(
      adminToken,
      process.env.ADMIN_SECRET_TOKEN
    );
    if (!compareToken) {
      res.clearCookie("adminToken");
      return res.status(401).json({
        statusCode: STATUS_CODES[401],
        message: "UNAUTHORIZED! Please login again!",
      });
    }
    const admin = await adminModel.findOne({ _id: compareToken._id });
    if (!admin) {
      res.clearCookie("adminToken");
      return res.status(401).json({
        statusCode: STATUS_CODES[401],
        message: "UNAUTHORIZED, Token mismatched! Please login again!",
      });
    }
    req.admin = admin;
    next();
  } catch (error) {
    res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};

module.exports = isAdminAuthenticated;
