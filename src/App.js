import React, { Component } from "react";
import Header from "./components/Header";
import SearchMovie from "./components/SearchMovie";
import Home from "./pages/Home/Home";
import Film from "./components/Film";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <SearchMovie />
        <Home />
        <Film />
        <Footer />
      </>
    );
  }
}

export default App;
