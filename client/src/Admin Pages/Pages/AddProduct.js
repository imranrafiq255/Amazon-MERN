import React, { useState } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { Link } from 'react-router-dom'; 

const AddProduct = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image

  // Function to handle image change
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
                  <form action="" className="tm-edit-product-form">
                    <div className="form-group mb-3">
                      <label htmlFor="name">Product Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control validate"
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="category">Category</label>
                      <select className="custom-select tm-select-accounts" id="category">
                        <option selected>Select category</option>
                        {/* Categories options here */}
                      </select>
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="category">Type</label>
                      <select className="custom-select tm-select-accounts" id="category">
                        <option value="music1">Music CDs</option>
                        {/* Types options here */}
                      </select>
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="name">Product Price</label>
                      <input
                        id="price"
                        name="price"
                        type="number"
                        className="form-control validate"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn btn-primary btn-block text-uppercase">
                        Add Product Now
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="tm-product-img-container">
                    <div className="tm-product-img-dummy mx-auto">
                      {selectedImage ? (
                        <img src={selectedImage} alt="Selected" className="img-fluid" />
                      ) : (
                        <i
                          className="fas fa-cloud-upload-alt tm-upload-icon"
                          onClick={() => document.getElementById('fileInput').click()}
                        ></i>
                      )}
                    </div>
                    <div className="custom-file mt-3 mb-3">
                      <input
                        id="fileInput"
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                      />
                      <input
                        type="button"
                        className="btn btn-primary btn-block mx-auto"
                        value="UPLOAD PRODUCT IMAGE"
                        onClick={() => document.getElementById('fileInput').click()}
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
