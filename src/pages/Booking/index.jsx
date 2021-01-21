import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import BookingNavBar from "../../components/BookingNavBar";
import PriceInfo from "../../components/PriceInfo";
import SeatPlan from "../../components/SeatPlan";
import { getCurrentWebPage } from "../../redux/actions/pageAction";
import BackToTop from "../../components/BackToTop";
import useStyles from "./style";

const Booking = (props) => {
  const styles = useStyles();
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getCurrentWebPage(props.match.url))
  },[]);
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
              <PriceInfo {...props} />
            </Box>
          </Grid>
        </Grid>
         <BackToTop showBelow={300} />
      </Container>
    );
  } else {
    return <Redirect to="/signin" />;
  }
};

export default Booking;
