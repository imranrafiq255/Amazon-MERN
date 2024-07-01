const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema(
  {
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    totalAmount: {
      type: Number,
    },
  },
  { timestamps: true }
);

const paymentModel = mongoose.model("Payment", paymentSchema);

module.exports = paymentModel;
