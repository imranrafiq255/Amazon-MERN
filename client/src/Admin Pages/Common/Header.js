import React from 'react';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-xl">
        <div className="container h-100">
          
            <h1 className="tm-site-title mb-0">Product Admin</h1>
          
          <button
            className="navbar-toggler ml-auto mr-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars tm-nav-icon"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto h-100">
              <li className="nav-item">
                <Link className="nav-link"to='/Products'>
                  <i className="fas fa-shopping-cart"></i> Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to='/Orders'>
                  <i className="far fa-user"></i> Orders
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link d-block" to='/SignIn'>
                  Admin, <b>Logout</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
