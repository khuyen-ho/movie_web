import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import BookingNavBar from "../../components/BookingNavBar";
import PriceInfo from "../../components/PriceInfo";
import SeatPlan from "../../components/SeatPlan";
import useStyles from "./style";

const Booking = (props) => {
  const styles = useStyles();

  return (
    <Container className={styles.root}>
      <Grid container>
        <Grid item xs={12} xl={8}>
          <BookingNavBar />
          <Box className={styles.seatPlan}>
            <SeatPlan />
          </Box>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Box className={styles.priceInfo}>
            <PriceInfo />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Booking;
