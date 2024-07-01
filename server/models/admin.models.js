const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const adminSchema = mongoose.Schema(
  {
    adminName: {
      type: String,
      required: [true, "admin Name is required"],
    },
    adminEmail: {
      type: String,
      required: [true, "admin Email is required"],
      unique: [true, "admin Email should be unique"],
      lowercase: true,
    },
    adminPassword: {
      type: String,
      required: [true, "admin Password is required"],
      minlength: [8, "Password should be greater than or equal to 8"],
    },
    phoneNumber: {
      type: String,
    },
  },
  { timestamps: true }
);
adminSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("adminPassword")) return next();
    this.adminPassword = await bcrypt.hash(this.adminPassword, 10);
    next();
  } catch (error) {
    next(error);
  }
});
const adminModel = mongoose.model("Admin", adminSchema);
module.exports = adminModel;
