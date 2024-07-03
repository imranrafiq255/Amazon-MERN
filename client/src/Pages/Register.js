import React, { useState } from "react";
import Footer from "../Common/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BarLoader from "../Loaders/BarLoader";
function Register() {
  const [customerImage, setCustomerImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    customerName: "",
    customerEmail: "",
    customerPassword: "",
    customerAvatar: null,
  });
  const [reTypePassword, setRetypePassword] = useState("");
  const navigate = useNavigate();
  const customerImagePicker = () => {
    document.getElementById("image").click();
  };
  const handleCustomerForm = (e) => {
    if (e.target.files) {
      setForm({ ...form, [e.target.name]: e.target.files[0] });
      return;
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      if (!form.customerAvatar) {
        alert("Customer avatar is missing");
        return;
      }
      if (reTypePassword !== form.customerPassword) {
        alert("Retype Password is incorrect!");
        return;
      }
      setLoading(true);
      const response = await axios.post("/api/v1/customer/sign-up", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data.message);
      navigate("/signin");
    } catch (error) {
      console.log(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <div>
      <div class="d-flex flex-row justify-content-center">
        <div class="row">
          <div class="col-md">
            <img
              class="img_11"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="Amazon Logo"
            />
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <div class="card">
          <div class="card-body">
            <h1 class="card-title">Create account</h1>
            <form id="create-account-form" onSubmit={submitForm}>
              <div
                className="w-full flex justify-center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <div
                  className="w-20 h-20 relative"
                  style={{
                    width: "5rem",
                    height: "5rem",
                    position: "relative",
                  }}
                >
                  <img
                    src={
                      customerImage
                        ? customerImage
                        : require("../../src/images/avatar.png")
                    }
                    alt=""
                    className="w-full h-full cursor-pointer rounded-full"
                    style={{
                      width: "100%",
                      height: "100%",
                      cursor: "pointer",
                      borderRadius: "50%",
                    }}
                    onClick={customerImagePicker}
                  />
                  {!customerImage && (
                    <img
                      src={require("../../src/images/plus.png")}
                      alt=""
                      className="w-6 h-6 absolute top-0 right-0 cursor-pointer"
                      style={{
                        width: "1.5rem",
                        height: "1.6rem",
                        position: "absolute",
                        top: 0,
                        right: 0,
                        cursor: "pointer",
                      }}
                      onClick={customerImagePicker}
                    />
                  )}
                  <input
                    type="file"
                    className="hidden"
                    style={{ visibility: "hidden" }}
                    id="image"
                    name="customerAvatar"
                    accept="image/*"
                    onChange={(e) => {
                      setCustomerImage(URL.createObjectURL(e.target.files[0]));
                      handleCustomerForm(e);
                    }}
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="name">Your name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="customerName"
                  placeholder="First and last name"
                  required
                  onChange={(e) => handleCustomerForm(e)}
                />
                <div class="invalid-feedback" id="nameError">
                  Name is required.
                </div>
              </div>

              <div class="form-group">
                <label for="email">Mobile number or email</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="Enter email address"
                  name="customerEmail"
                  required
                  onChange={(e) => handleCustomerForm(e)}
                />
                <div class="invalid-feedback" id="emailError">
                  Please enter a valid email or mobile number.
                </div>
              </div>

              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="customerPassword"
                  placeholder="At least 6 characters"
                  required
                  onChange={(e) => handleCustomerForm(e)}
                />
                <small class="form-text text-muted">
                  Passwords must be at least 6 characters.
                </small>
                <div class="invalid-feedback" id="passwordError">
                  Password must be at least 6 characters.
                </div>
              </div>

              <div class="form-group">
                <label for="repassword">Re-enter password</label>
                <input
                  type="password"
                  class="form-control"
                  id="repassword"
                  name="repassword"
                  placeholder="Re enter your password"
                  required
                  onChange={(e) => setRetypePassword(e.target.value)}
                />
                <div class="invalid-feedback" id="repasswordError">
                  Passwords do not match.
                </div>
              </div>

              {loading ? (
                <div class="btn btn-warning btn-block text-center w-full h-10 flex justify-center items-center">
                  <BarLoader />
                </div>
              ) : (
                <button
                  type="submit"
                  class="btn btn-warning btn-block text-center w-full"
                  style={{ width: "100%" }}
                >
                  Continue
                </button>
              )}
              <p class="mt-3">
                By creating an account, you agree to Amazon's{" "}
                <a href="/">Conditions of Use</a> and{" "}
                <a href="/">Privacy Notice</a>.
              </p>
              <hr />
              <p>
                <a href="/">Create a free business account</a>
              </p>
              <p>
                Already have an account? <a href="/signin">Sign in</a>
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Register;
