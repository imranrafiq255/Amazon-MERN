import React from "react";
import { Bars } from "react-loader-spinner";
const BarLoader = () => {
  return (
    <>
      <Bars
        color="#4fa94d"
        height={40}
        width={40}
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </>
  );
};

export default BarLoader;
