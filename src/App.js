import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/index.jsx";
import CinemaInfo from "./components/CinemaInfo";

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
