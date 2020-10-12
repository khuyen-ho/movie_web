import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";

class App extends Component {
  render() {
    return (
      <>
        <Home />
        <Footer />
      </>
    );
  }
}

export default App;
