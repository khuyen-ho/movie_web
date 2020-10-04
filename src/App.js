import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Detail from "./pages/Detail/Detail";
import Booking from "./pages/Booking/Booking";
import Pagination_ from "./components/Pagination/Pagination";
import SignIn from "./pages/Sign In/SignIn";
import SignUp from "./pages/Sign Up/SignUp";


class App extends Component {
  
  
  render(){
  return (
    <>
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <Detail/> */}
      {/* <Booking/> */}
      {/* <SignIn/> */}
      <SignUp/>
      {/* <Footer /> */}
      <div>
      {/* <Pagination_/> */}
      </div>
    </>
  )}
}

export default App;
