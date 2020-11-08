import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/index.jsx";

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
