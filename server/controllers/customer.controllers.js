const { STATUS_CODES } = require("http");
const customerModel = require("../models/customer.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const productModel = require("../models/product.models");
var braintree = require("braintree");
const orderModel = require("../models/order.models");
const paymentModel = require("../models/payment.models");
var gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});
exports.signUp = async (req, res) => {
  try {
    const { customerName, customerEmail, customerPassword, phoneNumber } =
      req.body;
    const customerAvatar = req.file ? req.file.path : null;
    const customer = await customerModel({
      customerName,
      customerEmail,
      customerPassword,
      phoneNumber,
      customerAvatar: customerAvatar || "",
    }).save();
    return res.status(201).json({
      statusCode: STATUS_CODES[201],
      message: `${customer.customerName} is added successfully.`,
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
    const { customerEmail, customerPassword } = req.body;
    if (!customerEmail || !customerPassword) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Email and password are required",
      });
    }
    if (!customerEmail.split("").includes("@")) {
      return res.status(403).json({
        statusCode: STATUS_CODES[403],
        message: "Please provide valid email",
      });
    }
    const emailExists = await customerModel
      .findOne({ customerEmail: customerEmail.toLowerCase() })
      .select("+customerPassword");
    if (!emailExists) {
      return res.status(401).json({
        statusCode: STATUS_CODES[401],
        message: "Incorrect email!",
      });
    }
    const comparedPassword = await bcrypt.compare(
      customerPassword,
      emailExists.customerPassword
    );
    if (!comparedPassword) {
      return res.status(401).json({
        statusCode: STATUS_CODES[401],
        message: "Incorrect password!",
      });
    }
    const token = await jwt.sign(
      { _id: emailExists._id },
      process.env.CUSTOMER_SECRET_TOKEN
    );
    const options = {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 20,
      secure: true,
    };
    res.cookie("customerToken", token, options);
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
exports.loadCurrentCustomer = async (req, res) => {
  try {
    const customer = await customerModel.findOne({ _id: req.customer._id });
    res.status(200).json({
      statusCode: STATUS_CODES[200],
      customer,
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
    res.clearCookie("customerToken");
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
exports.loadProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json({
      statusCode: STATUS_CODES[200],
      products,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.brainTreeToken = async (req, res) => {
  try {
    gateway.clientToken.generate({}, function (error, response) {
      if (error) {
        return res.status(403).json({
          message: error,
        });
      }
      return res.status(200).json({
        response,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.brainTreePayment = async (req, res) => {
  try {
    const { product, nonce } = req.body;
    gateway.transaction.sale(
      {
        amount: product.totalAmount,
        paymentMethodNonce: nonce,
        options: {
          submitForSettlement: true,
        },
      },
      async function (error, result) {
        if (error) {
          return res.status(500).json({
            message: error.message,
          });
        }
        try {
          const payment = await new paymentModel({
            products: product.products,
            totalAmount: product.totalAmount,
          }).save();
          await new orderModel({
            payment: payment._id,
            customer: req.customer._id,
            orderStatus: "pending",
          }).save();
          return res.status(200).json({
            message: `Order is placed successfully`,
          });
        } catch (err) {
          return res.status(500).json({
            message: err.message,
          });
        }
      }
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
