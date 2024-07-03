import React, { useContext } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";
import { MultiDataContext } from "../../ContextAPI/MultiDataContext";
import BarLoader from "../../Loaders/BarLoader";
function Products() {
  const { productsLoading, products } = useContext(MultiDataContext);
  return (
    <>
      <Header />
      <body id="reportsPage">
        <div class="container mt-5">
          <div class="row tm-content-row">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 tm-block-col">
              <div class="tm-bg-primary-dark tm-block tm-block-products">
                <div class="tm-product-table-container">
                  <table class="table table-hover tm-table-small tm-product-table">
                    <thead>
                      <tr>
                        <th scope="col">PRODUCT NAME</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">CATEGORY</th>
                        <th scope="col">TYPE</th>
                        <th scope="col">Pic</th>
                        <th scope="col">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productsLoading ? (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <BarLoader />
                        </div>
                      ) : products &&
                        Array.isArray(products) &&
                        products.length > 0 ? (
                        products.map((product) => (
                          <tr>
                            <td class="tm-product-name">
                              {product.productName}
                            </td>
                            <td>{product.productPrice}</td>
                            <td>{product.productCategory}</td>
                            <td>{product.productType}</td>
                            <td>
                              <img
                                src={product.productImage}
                                alt=""
                                style={{ width: "2rem", height: "2rem" }}
                              />
                            </td>
                          </tr>
                        ))
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <h1 style={{ fontSize: "5rem" }}>
                            No data into database
                          </h1>
                        </div>
                      )}
                    </tbody>
                  </table>
                </div>

                <Link
                  to="/admin-add-product"
                  class="btn btn-primary btn-block text-uppercase mb-3"
                >
                  Add new product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </body>

      <Footer />
    </>
  );
}

export default Products;
