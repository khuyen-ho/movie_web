import React, { Component } from "react";
import ScheduleMovie from "./components/ScheduleMovie";
import Detail from "./pages/Detail";

class App extends Component {
  render() {
    return (
      <>
        <Detail />
        <ScheduleMovie />
      </>
    );
  }
}

export default App;
