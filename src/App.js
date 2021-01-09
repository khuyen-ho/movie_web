import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignInUp from "./pages/SignInUp";

class App extends Component {
  render() {
    return (
      <>
        {/* <Header /> */}
        <SignInUp />
        {/* <Footer /> */}
      </>
    );
  }
}

export default App;
