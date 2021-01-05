import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignInUp from "./pages/SignInUp";

class App extends Component {
  render() {
    return (
      <>
        <SignInUp />
      </>
    );
  }
}

export default App;
