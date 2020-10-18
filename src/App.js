import React, { Component } from "react";
import Header from "./components/Header";
import SearchMovie from "./components/SearchMovie";
import Home from "./pages/Home/Home";


class App extends Component {
  render() {
    return (
      <>
        <Header />
        <SearchMovie />
        <Home />
      </>
    );
  }
}

export default App;
