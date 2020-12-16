import React, { Component } from "react";

import ScheduleMovie from "../../components/ScheduleMovie";
import BannerDetail from "../../components/BannerDetail";

export default class Detail extends Component {
  render() {
    return (
      <div>
        <BannerDetail />
        <ScheduleMovie />
      </div>
    );
  }
}
