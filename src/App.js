import React, { Component } from "react";
import SignInUpNavBar from "./components/SignInUpNavBar";
import SignIn from "./pages/SignIn";

class App extends Component {
  render() {
    return (
      <>
        <SignInUpNavBar />
        <SignIn />
      </>
    );
  }
}

export default App;
