import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Detail from "./pages/Detail/Detail";
import Booking from "./pages/Booking/Booking";

function App() {
  return (
    <>
      <Header />
      <Home />
      {/* <Detail/> */}
      {/* <Booking/> */}
      <Footer />
    </>
  );
}

export default App;
