import React, { useContext } from "react";

import imageSrc from "../images/gopro.jpg";
import iphonee from "../images/iphone.jpg";
import applewatchh from "../images/applewatch.jpg";
import camera from "../images/camera.jpg";
import xiomi from "../images/xiaomi-redmi-note-8-1.jpg";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { MultiDataContext } from "../ContextAPI/MultiDataContext";
import BarLoader from "../Loaders/BarLoader";
function HomePage({ cartItems, setCartItems }) {
  const { products, productsLoading } = useContext(MultiDataContext);
  console.log(cartItems);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem._id === item._id
    );
    if (existingItemIndex !== -1) {
      const updatedCartItems = cartItems.filter(
        (cartItem) => cartItem._id !== item._id
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, item]);
    }
  };
  const isInCart = (itemId) => {
    return cartItems.some((item) => item._id === itemId);
  };
  return (
    <div>
      <>
        <Header />

        <section class="pt-3">
          <div class="container">
            <div class="row gx-3">
              <main class="col-lg-9">
                <div
                  class="card-banner-bg h-70 rounded-5"
                  style={{ height: "350px", width: "800px" }}
                >
                  <div style={{ maxWidth: "2000px" }}>
                    <img
                      src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
                      alt=""
                      className="img-fluid "
                    />
                  </div>
                </div>
              </main>
              <aside class="col-lg-3">
                <div
                  class="card-banner-bg h-100 rounded-5"
                  style={{ backgroundColor: "#f87217", width: "250px" }}
                >
                  <div class="card-body text-center pb-5">
                    <h5 class="pt-5 text-white">Amazing Gifts</h5>
                    <p class="text-white">
                      No matter how far along you are in your sophistication
                    </p>
                    <a
                      href="/"
                      class="btn btn-outline-light"
                      style={{ backgroundColor: "#f87217", width: "200px" }}
                    >
                      {" "}
                      View more{" "}
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section>
          <div class="container my-5">
            <div class="row">
              {productsLoading ? (
                <div className="text-center">
                  <BarLoader />
                </div>
              ) : (
                products &&
                Array.isArray(products) &&
                products.map((product) => (
                  <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
                    <div class="card w-100 my-2 shadow-2-strong">
                      <img
                        src={product.productImage}
                        alt=""
                        className="card-img-top"
                        style={{ aspectRatio: "1 / 1" }}
                      />
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">{product.productName}</h5>
                        <p class="card-text">RS#{product.productPrice}</p>
                        <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                          <a
                            href="#!"
                            className={`${
                              isInCart(product._id)
                                ? "btn-danger"
                                : "btn-primary"
                            } btn shadow-0 me-1`}
                            onClick={() => addToCart(product)}
                          >
                            {isInCart(product._id)
                              ? "Remove from Cart"
                              : "Add to cart"}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "#f87217" }}>
          <div class="container text-white">
            <header class="pt-5 pb-4">
              <h3>Recommended products</h3>
            </header>

            <div class="row ">
              <div class="col-lg-3 col-md-6	 col-sm-6 d-flex">
                <div class="card h-50  w-100 my-2 shadow-2-strong">
                  <img
                    src={applewatchh}
                    class="card-img-top"
                    alt=""
                    style={{ aspectRatio: "1 / 1" }}
                  />
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">
                      Apple Watch Series 2, Aluminium Case
                    </h5>
                    <p class="card-text">$790.50</p>
                    <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                      <a
                        href="#!"
                        class="btn btn-light text-primary custom-button shadow-0 me-1"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div class="card h-50 w-100 my-2 shadow-2-strong">
                  <img
                    src={camera}
                    class="card-img-top"
                    alt=""
                    style={{ aspectRatio: "1 / 1" }}
                  />
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">Modern Product name here</h5>
                    <p class="card-text">$120.00</p>
                    <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                      <a
                        href="#!"
                        class="btn btn-light text-primary custom-button shadow-0 me-1"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div class="card  h-50 w-100 my-2 shadow-2-strong">
                  <img
                    src={imageSrc}
                    class="card-img-top"
                    alt=""
                    style={{ aspectRatio: "1 / 1" }}
                  />
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">
                      GoPro HERO6 4K Action Camera - Black
                    </h5>
                    <p class="card-text">$790.50</p>
                    <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                      <a
                        href="#!"
                        class="btn btn-light text-primary custom-button shadow-0 me-1"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div class="card h-50 w-100 my-2 shadow-2-strong">
                  <img
                    src={iphonee}
                    class="card-img-top"
                    alt=""
                    style={{ aspectRatio: "1 / 1" }}
                  />
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">
                      Apple iPhone 12 Pro 6.1" RAM 6GB 512GB
                    </h5>
                    <p class="card-text">$1200.00</p>
                    <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                      <a
                        href="#!"
                        class="btn btn-light text-primary custom-button shadow-0 me-1"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="container my-5">
          <header class="mb-4">
            <h3>Best sellers</h3>
          </header>

          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div class="card w-100 my-2 shadow-2-strong">
                <img
                  src={applewatchh}
                  alt=""
                  class="card-img-top"
                  style={{ aspectRatio: "1 / 1" }}
                />
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">
                    Apple Watch Series 2, Aluminium Case
                  </h5>
                  <p class="card-text">$790.50</p>
                  <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#!" class="btn btn-primary shadow-0 me-1">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div class="card w-100 my-2 shadow-2-strong">
                <img
                  src={imageSrc}
                  class="card-img-top"
                  alt=""
                  style={{ aspectRatio: "1 / 1" }}
                />
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">
                    GoPro HERO6 4K Action Camera - Black
                  </h5>
                  <p class="card-text">$790.50</p>
                  <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#!" class="btn btn-primary shadow-0 me-1">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div class="card w-100 my-2 shadow-2-strong">
                <img
                  src={xiomi}
                  class="card-img-top"
                  alt=""
                  style={{ aspectRatio: "1 / 1" }}
                />
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">
                    Xiaomi Redmi 8 Original Global Version 4GB
                  </h5>
                  <p class="card-text">$120.00</p>
                  <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#!" class="btn btn-primary shadow-0 me-1">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div class="card w-100 my-2 shadow-2-strong">
                <img
                  src={camera}
                  class="card-img-top"
                  alt=""
                  style={{ aspectRatio: "1 / 1" }}
                />
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">
                    Canon camera 20x zoom, Black color EOS 2000
                  </h5>
                  <p class="card-text">$320.00</p>
                  <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#!" class="btn btn-primary shadow-0 me-1">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <br />
        <br />

        <Footer />
      </>
    </div>
  );
}

export default HomePage;
