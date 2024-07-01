const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, "Product Name is required"],
    },
    productPrice: {
      type: Number,
      required: [true, "Product Price is required"],
    },
    productCategory: {
      type: String,
      required: [true, "Product Category is required"],
    },
    productType: {
      type: String,
      required: [true, "Product Type is required"],
    },
    productImage: {
      type: String,
      required: [true, "Product Image is required"],
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
