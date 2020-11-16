import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import HeaderBooking from "../../components/HeaderBooking";
import PriceTable from "../../components/PriceTable";
import SeatTable from "../../components/SeatTable";

export default class Booking extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={9}>
          <HeaderBooking />
          <SeatTable />
        </Grid>
        <Grid item xs={3}>
          <PriceTable />
        </Grid>
      </Grid>
    );
  }
}
