import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

function Men({ cartItems, setCartItems }) {
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
  const items = [
    {
      id: 1,
      name: "T-shirts",
      price: 34.5,
      image:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
      description: "T-shirts with multiple colors, for men and lady",
    },
    {
      id: 2,
      name: "Winter Jacket",
      price: 120.0,
      image:
        "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
      description: "Winter Jacket for Men and Women, All sizes",
    },
    {
      id: 3,
      name: "T-shirts",
      price: 34.5,
      image:
        "https://i.pinimg.com/236x/7c/a6/6b/7ca66b1bfcfb87ea2e0387b375776d0b.jpg",
      description: "T-shirts with multiple colors, for men and lady",
    },
    {
      id: 4,
      name: "Winter Jacket",
      price: 120.0,
      image:
        "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
      description: "Winter Jacket for Men and Women, All sizes",
    },
    {
      id: 5,
      name: "T-shirts",
      price: 34.5,
      image:
        "https://i.pinimg.com/236x/7c/a6/6b/7ca66b1bfcfb87ea2e0387b375776d0b.jpg",
      description: "T-shirts with multiple colors, for men and lady",
    },
    {
      id: 6,
      name: "Winter Jacket",
      price: 120.0,
      image:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
      description: "Winter Jacket for Men and Women, All sizes",
    },

    // Add more products as needed
  ];

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
                  {items.map((item) => (
                    <div key={item.id} className="col-lg-4 col-md-6 col-sm-6">
                      <div className="card w-100 my-2 shadow-2-strong">
                        <img
                          src={item.image}
                          className="card-img-top"
                          alt={item.name}
                        />
                        <div className="card-body d-flex flex-column">
                          <div className="d-flex flex-row justify-content-between">
                            <h5 className="mb-1">${item.price}</h5>
                            <span className="text-danger">
                              <s>$49.99</s>
                            </span>
                          </div>
                          <p className="card-text">{item.description}</p>
                          <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                            <button
                              onClick={() => addToCart(item)}
                              className="btn btn-primary shadow-0 me-1"
                            >
                              {isInCart(item.id)
                                ? "Remove from Cart"
                                : "Add to Cart"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <hr />

                <nav
                  aria-label="Page navigation example"
                  className="d-flex justify-content-center mt-3"
                >
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        5
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
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
