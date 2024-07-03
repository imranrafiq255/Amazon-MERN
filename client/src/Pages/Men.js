import React, { useContext } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { MultiDataContext } from "../ContextAPI/MultiDataContext";

function Men({ cartItems, setCartItems }) {
  const { products, productsLoading } = useContext(MultiDataContext);
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
    <>
      <Header />

      <div>
        <div className=" mb-4" style={{ backgroundColor: "white" }}>
          <div className="container py-4" style={{ backgroundColor: "white" }}>
            <h3 className="text-black mt-2">Men's wear</h3>
          </div>
        </div>

        <section className="">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <button
                  className="btn btn-outline-secondary mb-3 w-100 d-lg-none"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span>Show filter</span>
                </button>

                <div
                  className="collapse card d-lg-block mb-5"
                  id="navbarSupportedContent"
                >
                  <div
                    className="accordion"
                    id="accordionPanelsStayOpenExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header text-white      "
                        id="headingOne"
                        style={{ backgroundColor: "#f87217" }}
                      >
                        Related items
                      </h2>
                      <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                      >
                        <div className="accordion-body">
                          <ul className="list-unstyled">
                            <li>
                              <a href="/" className="text-dark">
                                Electronics{" "}
                              </a>
                            </li>
                            <li>
                              <a href="/" className="text-dark">
                                Home items{" "}
                              </a>
                            </li>
                            <li>
                              <a href="/" className="text-dark">
                                Books, Magazines{" "}
                              </a>
                            </li>
                            <li>
                              <a href="/" className="text-dark">
                                Men's clothing{" "}
                              </a>
                            </li>
                            <li>
                              <a href="/" className="text-dark">
                                Interiors items{" "}
                              </a>
                            </li>
                            <li>
                              <a href="/" className="text-dark">
                                Underwears{" "}
                              </a>
                            </li>
                            <li>
                              <a href="/" className="text-dark">
                                Shoes for men{" "}
                              </a>
                            </li>
                            <li>
                              <a href="/" className="text-dark">
                                Accessories{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header text-white      "
                        id="headingOne"
                        style={{ backgroundColor: "#f87217" }}
                      >
                        Brands
                      </h2>
                      <div
                        id="panelsStayOpen-collapseTwo"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingTwo"
                      >
                        <div className="accordion-body">
                          <div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked1"
                                checked
                              />
                              <label
                                className="form-check-label"
                                for="flexCheckChecked1"
                              >
                                Mercedes
                              </label>
                              <span className="badge badge-secondary float-end">
                                120
                              </span>
                            </div>

                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked2"
                                checked
                              />
                              <label
                                className="form-check-label"
                                for="flexCheckChecked2"
                              >
                                Toyota
                              </label>
                              <span className="badge badge-secondary float-end">
                                15
                              </span>
                            </div>

                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked3"
                                checked
                              />
                              <label
                                className="form-check-label"
                                for="flexCheckChecked3"
                              >
                                Mitsubishi
                              </label>
                              <span className="badge badge-secondary float-end">
                                35
                              </span>
                            </div>

                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked4"
                                checked
                              />
                              <label
                                className="form-check-label"
                                for="flexCheckChecked4"
                              >
                                Nissan
                              </label>
                              <span className="badge badge-secondary float-end">
                                89
                              </span>
                            </div>

                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                className="form-check-label"
                                for="flexCheckDefault"
                              >
                                Honda
                              </label>
                              <span className="badge badge-secondary float-end">
                                30
                              </span>
                            </div>

                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                className="form-check-label"
                                for="flexCheckDefault"
                              >
                                Suzuki
                              </label>
                              <span className="badge badge-secondary float-end">
                                30
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header text-white      "
                        id="headingOne"
                        style={{ backgroundColor: "#f87217" }}
                      >
                        Price
                      </h2>
                      <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingThree"
                      >
                        <div className="accordion-body">
                          <div className="range">
                            <input
                              type="range"
                              className="form-range"
                              id="customRange1"
                            />
                          </div>
                          <div className="row mb-3">
                            <div className="col-6">
                              <p className="mb-0">Min</p>
                              <div className="form-outline">
                                <input
                                  type="number"
                                  id="typeNumber"
                                  className="form-control"
                                />
                                <label className="form-label" for="typeNumber">
                                  $0
                                </label>
                              </div>
                            </div>
                            <div className="col-6">
                              <p className="mb-0">Max</p>
                              <div className="form-outline">
                                <input
                                  type="number"
                                  id="typeNumber"
                                  className="form-control"
                                />
                                <label className="form-label" for="typeNumber">
                                  $1,0000
                                </label>
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="btn btn-white w-100 border border-secondary text-white"
                            style={{ backgroundColor: "#f87217" }}
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item"></div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <header className="d-sm-flex align-items-left border-bottom mb-4 pb-3">
                  <strong className="d-block py-2">32 Items found </strong>
                  <br />
                  <br />
                  <div className="ms-auto">
                    <select className="form-select d-inline-block w-auto border pt-1">
                      <option value="0">Best match</option>
                      <option value="1">Recommended</option>
                      <option value="2">High rated</option>
                      <option value="3">Randomly</option>
                    </select>
                  </div>
                </header>

                <div className="row">
                  {productsLoading ? (
                    <div></div>
                  ) : products &&
                    Array.isArray(products) &&
                    products.length > 0 ? (
                    products.map((product) => (
                      <div
                        key={product._id}
                        className="col-lg-4 col-md-6 col-sm-6"
                      >
                        <div className="card w-100 my-2 shadow-2-strong">
                          <img
                            src={product.productImage}
                            className="card-img-top"
                            alt={product.productName}
                            style={{ padding: "20px" }}
                          />
                          <div className="card-body d-flex flex-column">
                            <div className="d-flex flex-row justify-content-between">
                              <h5 className="mb-1">${product.productPrice}</h5>
                            </div>
                            <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                              <button
                                onClick={() => addToCart(product)}
                                className="btn btn-primary shadow-0 me-1"
                              >
                                {isInCart(product._id)
                                  ? "Remove from Cart"
                                  : "Add to Cart"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    ""
                  )}
                </div>

                <hr />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Men;
