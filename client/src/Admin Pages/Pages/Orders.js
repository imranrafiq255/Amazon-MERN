import React, { useEffect, useState } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const response = await axios.get("/api/v1/admin/load-orders");
        setOrders(response.data.orders);
      } catch (error) {
        console.log(error?.response?.data?.message);
        alert(error?.response?.data?.message);
      }
    };
    loadOrders();
  }, []);
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  return (
    <>
      <Header />
      <body id="OrdersPage">
        <div class="container mt-5">
          <h1 style={{ color: "black" }}>ORDERS</h1>
          <div class="row tm-content-row">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 tm-block-col">
              <div class="tm-bg-primary-dark tm-block tm-block-products">
                <div class="tm-product-table-container">
                  <table class="table table-hover tm-table-small tm-product-table">
                    <thead>
                      <tr>
                        <th scope="col">CUSTOMER NAME</th>
                        <th scope="col">DATE</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">ORDER PRODUCTS</th>
                        <th scope="col">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders && Array.isArray(orders) ? (
                        orders.length > 0 ? (
                          orders.map((order) => (
                            <tr>
                              <td class="tm-product-name">
                                {order.customer.customerName}
                              </td>
                              <td>{formatDate(order.createdAt)}</td>
                              <td>{order.orderStatus}</td>
                              <td>
                                {order.payment.products.map((product) => (
                                  <span>{product.productName}</span>
                                ))}
                              </td>
                            </tr>
                          ))
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignContent: "center",
                            }}
                          >
                            <h1>No orders into database</h1>
                          </div>
                        )
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignContent: "center",
                          }}
                        >
                          <h1>Data should be in array form</h1>
                        </div>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>

      <Footer />
    </>
  );
}

export default Orders;
