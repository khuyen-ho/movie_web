import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AccountDetail from "./pages/AccountDetail";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <AccountDetail />
        <Footer />
      </>
    );
  }
}

export default App;
