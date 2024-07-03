const { STATUS_CODES } = require("http");
const adminModel = require("../models/admin.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const productModel = require("../models/product.models");
const orderModel = require("../models/order.models");
exports.signUp = async (req, res) => {
  try {
    const { adminName, adminEmail, adminPassword, phoneNumber } = req.body;
    const admin = await adminModel({
      adminName,
      adminEmail,
      adminPassword,
      phoneNumber,
    }).save();
    return res.status(201).json({
      statusCode: STATUS_CODES[201],
      message: `${admin.adminName} is added successfully.`,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.signIn = async (req, res) => {
  try {
    const { adminEmail, adminPassword } = req.body;
    if (!adminEmail || !adminPassword) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Email and password are required",
      });
    }
    if (!adminEmail.split("").includes("@")) {
      return res.status(403).json({
        statusCode: STATUS_CODES[403],
        message: "Please provide valid email",
      });
    }
    const emailExists = await adminModel
      .findOne({ adminEmail: adminEmail.toLowerCase() })
      .select("+adminPassword");
    if (!emailExists) {
      return res.status(401).json({
        statusCode: STATUS_CODES[401],
        message: "Incorrect email!",
      });
    }
    const comparedPassword = await bcrypt.compare(
      adminPassword,
      emailExists.adminPassword
    );
    if (!comparedPassword) {
      return res.status(401).json({
        statusCode: STATUS_CODES[401],
        message: "Incorrect password!",
      });
    }
    const token = await jwt.sign(
      { _id: emailExists._id },
      process.env.ADMIN_SECRET_TOKEN
    );
    const options = {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 20,
      secure: true,
    };
    res.cookie("adminToken", token, options);
    res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: "You logged in successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.loadCurrentAdmin = async (req, res) => {
  try {
    const admin = await adminModel.findOne({ _id: req.admin._id });
    res.status(200).json({
      statusCode: STATUS_CODES[200],
      admin,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.logout = async (req, res) => {
  try {
    res.clearCookie("adminToken");
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: "You logged out successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.addProduct = async (req, res) => {
  try {
    const { productName, productPrice, productCategory, productType } =
      req.body;
    const productImage = req.file ? req.file.path : null;
    const product = await new productModel({
      productName,
      productPrice,
      productCategory,
      productType,
      productImage,
    }).save();
    return res.status(201).json({
      statusCode: STATUS_CODES[201],
      message: `${product.productName} is added successfully`,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.loadOrders = async (req, res) => {
  try {
    const orders = await orderModel
      .find()
      .populate("customer")
      .populate({
        path: "payment",
        populate: {
          path: "products",
          model: "Product",
        },
      });
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      orders,
    });
  } catch (error) {
    return res.status(500).json({});
  }
};
