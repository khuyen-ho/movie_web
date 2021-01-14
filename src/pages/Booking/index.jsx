import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import BookingNavBar from "../../components/BookingNavBar";
import PriceInfo from "../../components/PriceInfo";
import SeatPlan from "../../components/SeatPlan";
import useStyles from "./style";

const Booking = (props) => {
  const styles = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const userLogin = useSelector((state) => state.userLogin);
  if (userLogin) {
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
  } else {
    alert("Vui lòng đăng nhập");
    return <Redirect to="/signin" />;
  }
};

export default Booking;
