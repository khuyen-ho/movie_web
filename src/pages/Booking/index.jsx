import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import BookingNavBar from "../../components/BookingNavBar";
import PriceInfo from "../../components/PriceInfo";
import SeatPlan from "../../components/SeatPlan";
import useStyles from "./style";

const Booking = (props) => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={12} md={8}>
          <BookingNavBar />
          <Box className={classes.seatPlan}>
            <SeatPlan />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>

      <Box className={classes.priceInfo}>
        <PriceInfo />
      </Box>
    </Container>
  );
};

export default Booking;
