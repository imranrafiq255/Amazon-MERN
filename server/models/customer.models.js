const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const customerSchema = mongoose.Schema(
  {
    customerName: {
      type: String,
      required: [true, "Customer Name is required"],
    },
    customerEmail: {
      type: String,
      required: [true, "Customer Email is required"],
      unique: [true, "Customer Email should be unique"],
      lowercase: true,
    },
    customerPassword: {
      type: String,
      required: [true, "Customer Password is required"],
      minlength: [8, "Password should be greater than or equal to 8"],
      select: false,
    },
    phoneNumber: {
      type: String,
    },
    customerAvatar: {
      type: String,
    },
  },
  { timestamps: true }
);
customerSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("customerPassword")) return next();
    this.customerPassword = await bcrypt.hash(this.customerPassword, 10);
    next();
  } catch (error) {
    next(error);
  }
});
const customerModel = mongoose.model("Customer", customerSchema);
module.exports = customerModel;
