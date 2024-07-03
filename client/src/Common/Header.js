import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  faUser,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <header>
        <div
          className="p-0 text-center border-bottom"
          style={{ backgroundColor: "#708090" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 col-sm-4 col-4">
                <a
                  href="https://mdbootstrap.com/"
                  target="_blank"
                  className="float-start"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    height="35"
                    alt="MDB Logo"
                  />
                </a>
              </div>

              <div className="col-lg-5 col-sm-8 col-8 justify-content-center">
                <form
                  className="d-flex w-150px amazon-search-form"
                  role="search"
                >
                  <input
                    className="form-control me-2 search-input text-dark bg-white"
                    type="search"
                    placeholder="Search Amazon"
                    aria-label="Search"
                  />
                  <button className="w-10 custom-button2" type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </form>
              </div>

              <div className="col-lg-5 col-sm-8 col-8 order-lg-last d-flex justify-content-end">
                <div className="d-flex align-items-center">
                  <Link
                    to="/signin"
                    className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center custom-button mx-2 text-white"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faUser} className="m-1 me-md-2" />
                    <p className="d-none d-md-block mb-0">Sign in</p>
                  </Link>

                  <Link
                    to="/Cart"
                    className="border rounded py-1 px-3 nav-link d-flex align-items-center custom-button mx-2 text-white"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="m-1 me-md-2"
                    />
                    <p className="d-none d-md-block mb-0">My cart</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#f87217" }}
        >
          <div className="container justify-content-center justify-content-md-between">
            <button
              className="navbar-toggler border text-dark py-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarLeftAlignExample"
              aria-controls="navbarLeftAlignExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarLeftAlignExample"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link text-dark">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/men" className="nav-link text-dark">
                    Men
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/hotoffers" className="nav-link text-dark">
                    Hot offers
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/">
                    Gift boxes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/">
                    Menu item
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/">
                    Menu name
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-dark mb-0"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Others
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
