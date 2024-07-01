import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const MultiDataContext = createContext();
export const MultiDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);
  useEffect(() => {
    const productApiHandler = async () => {
      try {
        setProductsLoading(true);
        const response = await axios.get("/api/v1/customer/load-products");
        setProducts(response.data.products);
        setProductsLoading(false);
      } catch (error) {
        console.log(error.response.data.message);
        setProductsLoading(false);
      }
    };
    productApiHandler();
  }, []);
  return (
    <MultiDataContext.Provider value={{ products, productsLoading }}>
      {children}
    </MultiDataContext.Provider>
  );
};
