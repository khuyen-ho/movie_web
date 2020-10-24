import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    );
  }
}

export default App;
