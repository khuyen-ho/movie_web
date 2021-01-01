import React, { Component } from "react";
import Header from "./components/Header";
import MovieDetail from "./pages/MovieDetail";
import Footer from "./components/Footer/index.jsx";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <MovieDetail />
        <Footer />
      </>
    );
  }
}

export default App;
