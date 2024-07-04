import React, { useState } from "react";
import Footer from "../Common/Footer";
import axios from "axios";
import BarLoader from "../../Loaders/BarLoader";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const [form, setForm] = useState({ adminEmail: "", adminPassword: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleInputs = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    if (form.adminEmail === "") {
      alert("Admin email is required");
      return;
    }
    if (form.adminPassword === "") {
      alert("Admin password is required");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post("/api/v1/admin/sign-in", form);
      console.log(response?.data?.message);
      setLoading(false);
      navigate("/admin-products");
    } catch (error) {
      console.log(error?.response?.data?.message);
      alert(error?.response?.data?.message);
      setLoading(false);
    }
  };
  return (
    <>
      <div class="d-flex flex-row justify-content-center">
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
      <div class="d-flex flex-row justify-content-center">
        <div class="row">
          <div class="col-md">
            <form onSubmit={submitForm}>
              <div class="sign-in">Sign In</div>
              <div class="form-group">
                <label
                  id="words_1"
                  for="exampleInputEmail1"
                  style={{ color: "black" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  class="form-control bg-white text-dark"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="adminEmail"
                  placeholder="Enter email"
                  style={{ color: "white" }}
                  onChange={handleInputs}
                />
                <small id="emailHelp" class="form-text text-muted"></small>
              </div>
              <div class="form-group">
                <label
                  id="words_2"
                  for="exampleInputPassword1"
                  style={{ color: "black" }}
                >
                  Password{" "}
                </label>
                <input
                  type="password"
                  class="form-control bg-white text-dark"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="adminPassword"
                  onChange={handleInputs}
                />
                <div class="form-group">
                  {loading ? (
                    <div
                      className="btn btn-warning"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
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
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SignIn;
