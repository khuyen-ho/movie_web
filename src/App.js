import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer/index.jsx";
import CinemaDetail from "./pages/CinemaDetail";
import Booking from "./pages/Booking";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <CinemaDetail />
        <Footer />
       {/* <Booking/> */}
      </>
    );
  }
}

export default App;
