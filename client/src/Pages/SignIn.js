import React, { useState } from "react";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BarLoader from "../Loaders/BarLoader";
function SignIn() {
  const [form, setForm] = useState({ customerEmail: "", customerPassword: "" });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/v1/customer/sign-in", form);
      console.log(response?.data?.message);
      navigate("/");
      setLoading(false);
    } catch (error) {
      console.log(error?.response?.data?.message);
      setLoading(false);
    }
  };
  return (
    <div>
      <div class="flex justify-center items-center">
        <div class="row">
          <div class="col-md">
            <img
              class="img_1"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="Amazon Logo"
            />
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center w-full h-full">
        <div class="row">
          <div class="col-md">
            <form onSubmit={submitForm}>
              <div class="sign-in">Sign In</div>
              <div class="form-group">
                <label id="words_1" for="exampleInputEmail1">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="customerEmail"
                  placeholder="Enter email"
                  onChange={(e) => handleForm(e)}
                />
                <small id="emailHelp" class="form-text text-muted"></small>
              </div>
              <div class="form-group">
                <label id="words_2" for="exampleInputPassword1">
                  Password{" "}
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="customerPassword"
                  placeholder="Enter Password"
                  onChange={(e) => handleForm(e)}
                />
                <div class="form-group">
                  {loading ? (
                    <div className="btn btn-warning flex justify-center items-center h-10">
                      <BarLoader />
                    </div>
                  ) : (
                    <button
                      type="submit"
                      class="btn btn-warning"
                      id="sign-in"
                      style={{ Align: "center" }}
                    >
                      Sign In
                    </button>
                  )}
                </div>
              </div>
              <div class="form-check"></div>
              <Link to="/register">
                <button type="button" class="btn btn-warning" id="grey-button">
                  {" "}
                  Create your Amazon account
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <div className="footer mt-32">
        <Footer />
      </div>
    </div>
  );
}

export default SignIn;
