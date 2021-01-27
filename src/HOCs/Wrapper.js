import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Wrapper = (Component) => {
  return (props) => {
    return (
      <div>
        <Header />
        <Component {...props} />
        <Footer />
      </div>
    );
  };
};
export default Wrapper;
