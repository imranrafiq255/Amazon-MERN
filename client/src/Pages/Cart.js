import React, { useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

function Cart({ cartItems }) {
  const [items, setItems] = useState(cartItems);
  const removeFromCart = (itemId) => {
    const updatedItems = items.filter((item) => item._id !== itemId);
    setItems(updatedItems);
  };
  return (
    <div>
      <Header />

      <div class="p-3 text-center bg-white border-bottom">
        <div class="container">
          <div class="d-flex justify-content-between">
            <div class="">
              <h1 style={{ Color: "#f87217" }}>CART</h1>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#f87217" }}>
        <div class="container py-4">
          <nav class="d-flex">
            <h6 class="mb-0">
              <a href="" class="text-white-50">
                Home
              </a>
              <span class="text-white-50 mx-2"> </span>
              <a href="" class="text-white">
                <u>2. Shopping cart</u>
              </a>
              <span class="text-white-50 mx-2"> </span>
              <a href="" class="text-white-50">
                3. Order info
              </a>
              <span class="text-white-50 mx-2"> </span>
              <a href="" class="text-white-50">
                4. Payment
              </a>
            </h6>
          </nav>
        </div>
      </div>

      <section class="bg-light my-5">
        <div class="container">
          <div class="row">
            <div className="col-lg-9">
              {items.map((item) => (
                <div key={item._id} className="card border shadow-0 m-4">
                  <div className="row gy-3 mb-4">
                    <div className="col-lg-5">
                      <div className="me-lg-5">
                        <div className="d-flex">
                          <img
                            src={item.productImage}
                            className="border rounded me-3"
                            style={{ width: "96px", height: "96px" }}
                            alt={item.productImage}
                          />
                          <div>
                            <h1
                              className="text-muted"
                              style={{ fontSize: "1.1rem", margin: "5px" }}
                            >
                              {item.productName}
                            </h1>
                            <p className="text-muted">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                      <div>
                        <select
                          style={{ width: "100px" }}
                          className="form-select me-4"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                      <div>
                        <h6>${item.productPrice}</h6>
                        <small className="text-muted text-nowrap">
                          {" "}
                          $460.00 / per item{" "}
                        </small>
                      </div>
                    </div>
                    <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                      <div className="float-md-end">
                        <button
                          onClick={() => removeFromCart(item._id)}
                          className="btn btn-light border text-danger icon-hover-danger"
                        >
                          {" "}
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div class="col-lg-3">
              <div class="card mb-3 border shadow-0">
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <label class="form-label">Have coupon?</label>
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control border"
                          name=""
                          placeholder="Coupon code"
                        />
                        <button class="btn btn-light border">Apply</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="card shadow-0 border">
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <p class="mb-2">Total price:</p>
                    <p class="mb-2">$329.00</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="mb-2">Discount:</p>
                    <p class="mb-2 text-success">-$60.00</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="mb-2">TAX:</p>
                    <p class="mb-2">$14.00</p>
                  </div>
                  <hr />
                  <div class="d-flex justify-content-between">
                    <p class="mb-2">Total price:</p>
                    <p class="mb-2 fw-bold">$283.00</p>
                  </div>

                  <div class="mt-3">
                    <a href="#" class="btn btn-primary w-100 shadow-0 mb-2">
                      {" "}
                      Make Purchase{" "}
                    </a>
                    <a href="#" class="btn btn-light w-100 border mt-2">
                      {" "}
                      Back to shop{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container my-5">
          <header class="mb-4">
            <h3>Recommended items</h3>
          </header>

          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card px-4 border shadow-0 mb-4 mb-lg-0">
                <div class="mask px-2" style={{ height: "50px" }}>
                  <div class="d-flex justify-content-between">
                    <h6>
                      <span class="badge bg-danger pt-1 mt-3 ms-2">New</span>
                    </h6>
                  </div>
                </div>
                <a href="#" class="">
                  <img
                    src="https://i.pinimg.com/736x/fb/75/35/fb7535c2f57df7a99614c909a29901d8.jpg"
                    class="card-img-top rounded-2"
                  />
                </a>
                <div class="card-body d-flex flex-column pt-3 border-top">
                  <a href="#" class="nav-link">
                    Gaming Headset with Mic
                  </a>
                  <div class="price-wrap mb-2">
                    <strong class="">$18.95</strong>
                    <del class="">$24.99</del>
                  </div>
                  <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#" class="btn btn-outline-primary w-100">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card px-4 border shadow-0 mb-4 mb-lg-0">
                <div class="mask px-2" style={{ height: "50px" }}></div>
                <a href="#" class="">
                  <img
                    src="https://i.pinimg.com/736x/fb/75/35/fb7535c2f57df7a99614c909a29901d8.jpg"
                    class="card-img-top rounded-2"
                  />
                </a>
                <div class="card-body d-flex flex-column pt-3 border-top">
                  <a href="#" class="nav-link">
                    Apple Watch Series 1 Sport{" "}
                  </a>
                  <div class="price-wrap mb-2">
                    <strong class="">$120.00</strong>
                  </div>
                  <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#" class="btn btn-outline-primary w-100">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card px-4 border shadow-0">
                <div class="mask px-2" style={{ height: "50px" }}></div>
                <a href="#" class="">
                  <img
                    src="https://i.pinimg.com/736x/fb/75/35/fb7535c2f57df7a99614c909a29901d8.jpg"
                    class="card-img-top rounded-2"
                  />
                </a>
                <div class="card-body d-flex flex-column pt-3 border-top">
                  <a href="#" class="nav-link">
                    Men's Denim Jeans Shorts
                  </a>
                  <div class="price-wrap mb-2">
                    <strong class="">$80.50</strong>
                  </div>
                  <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#" class="btn btn-outline-primary w-100">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card px-4 border shadow-0">
                <div class="mask px-2" style={{ height: "50px" }}>
                  <a href="#">
                    <i class="fas fa-heart text-primary fa-lg float-end pt-3 m-2"></i>
                  </a>
                </div>
                <a href="#" class="">
                  <img
                    src="https://i.pinimg.com/736x/fb/75/35/fb7535c2f57df7a99614c909a29901d8.jpg"
                    class="card-img-top rounded-2"
                  />
                </a>
                <div class="card-body d-flex flex-column pt-3 border-top">
                  <a href="#" class="nav-link">
                    Men's Denim Jeans Shorts{" "}
                  </a>
                  <div class="price-wrap mb-2">
                    <strong class="">$13.90</strong>
                  </div>
                  <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#" class="btn btn-outline-primary w-100">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Cart;
