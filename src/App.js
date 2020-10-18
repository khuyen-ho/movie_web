import React, { Component } from "react";
//import "./App.css";
import Header from "./components/Header";
import SearchMovie from "./components/SearchMovie";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <SearchMovie />
      </>
    );
  }
}

export default App;
