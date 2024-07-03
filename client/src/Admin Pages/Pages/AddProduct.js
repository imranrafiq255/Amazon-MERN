import React, { useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import "./Style/templatemo-style.css";
import axios from "axios";
import BarLoader from "../../Loaders/BarLoader";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    productName: "",
    productPrice: "",
    productCategory: "",
    productType: "",
    customerAvatar: null,
  });
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputs = (e) => {
    console.log(e.target.files);
    if (e.target.files) {
      setForm({ ...form, [e.target.name]: e.target.files[0] });
      return;
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const productSubmitHandler = async (e) => {
    e.preventDefault();
    if (form.productCategory === "") {
      alert("Product category field is missing");
      return;
    }
    if (form.productType === "") {
      alert("Product type field is missing");
      return;
    }
    if (form.customerAvatar === null) {
      alert("Product image field is missing");
      return;
    }
    console.log(form);
    try {
      setLoading(true);
      const response = await axios.post("/api/v1/admin/add-product", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response?.data?.message);
      navigate("/admin-products");
      setLoading(false);
    } catch (error) {
      console.log(error?.response?.data?.message);
      alert(error?.response?.data?.message);
      setLoading(false);
    }
  };
  return (
    <>
      <Header />
      <div className="container tm-mt-big tm-mb-big">
        <div className="row">
          <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
              <div className="row">
                <div className="col-12">
                  <h2 className="tm-block-title d-inline-block">Add Product</h2>
                </div>
              </div>
              <div className="row tm-edit-product-row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <form
                    action=""
                    className="tm-edit-product-form"
                    onSubmit={productSubmitHandler}
                  >
                    <div className="form-group mb-3">
                      <label htmlFor="name">Product Name</label>
                      <input
                        id="name"
                        name="productName"
                        type="text"
                        className="form-control validate bg-white text-dark"
                        placeholder="Enter product name"
                        required
                        onChange={(e) => handleInputs(e)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="category">Category</label>
                      <select
                        className="custom-select tm-select-accounts"
                        id="category"
                        name="productCategory"
                        onChange={(e) => handleInputs(e)}
                      >
                        <option selected>Select category</option>
                        <option value={"Phone"}>Phone</option>
                        <option value={"Phone"}>Laptop</option>
                        <option value={"Clothes"}>Clothes</option>
                        {/* Categories options here */}
                      </select>
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="type">Type</label>
                      <select
                        className="custom-select tm-select-accounts"
                        id="type"
                        name="productType"
                        onChange={(e) => handleInputs(e)}
                      >
                        <option selected>Select your project</option>
                        <option value={"Small"}>Small</option>
                        <option value={"Medium"}>Medium</option>
                        <option value={"Large"}>Large</option>
                        {/* Types options here */}
                      </select>
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="name">Product Price</label>
                      <input
                        id="price"
                        name="productPrice"
                        type="number"
                        placeholder="Enter product price"
                        className="form-control validate bg-white text-dark"
                        required
                        onChange={(e) => handleInputs(e)}
                      />
                    </div>

                    <div className="col-12">
                      {loading ? (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          className="btn btn-primary btn-block mx-auto"
                        >
                          <BarLoader />
                        </div>
                      ) : (
                        <button
                          type="submit"
                          className="btn btn-primary btn-block text-uppercase"
                        >
                          Add Product Now
                        </button>
                      )}
                    </div>
                  </form>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="tm-product-img-container">
                    <div className="tm-product-img-dummy mx-auto">
                      {selectedImage ? (
                        <img
                          src={selectedImage}
                          alt="Selected"
                          className="img-fluid"
                        />
                      ) : (
                        <i
                          className="fas fa-cloud-upload-alt tm-upload-icon"
                          onClick={() =>
                            document.getElementById("fileInput").click()
                          }
                        ></i>
                      )}
                    </div>
                    <div className="custom-file mt-3 mb-3">
                      <input
                        id="fileInput"
                        type="file"
                        style={{ display: "none" }}
                        name="customerAvatar"
                        onChange={(e) => {
                          handleImageChange(e);
                          handleInputs(e);
                        }}
                      />
                      <input
                        type="button"
                        className="btn btn-primary btn-block mx-auto"
                        value="UPLOAD PRODUCT IMAGE"
                        onClick={() =>
                          document.getElementById("fileInput").click()
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AddProduct;
