import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import BookingNavBar from "../../components/BookingNavBar";
import PriceInfo from "../../components/PriceInfo";
import SeatPlan from "../../components/SeatPlan";
import { getCurrentWebPage } from "../../redux/actions/pageAction";
import { getSeatList } from "../../redux/actions/bookingAction";
import useStyles from "./style";

const Booking = (props) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const info = useSelector((state) => state.booking);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getCurrentWebPage(props.match.url));
    dispatch(getSeatList(props.match.params.id));
  }, [dispatch, props.match.params.id, props.match.url]);

  const userLogin = useSelector((state) => state.userLogin);
  if (userLogin) {
    return (
      <Container className={styles.root}>
        <Grid container>
          <Grid item xs={12} xl={8}>
            <BookingNavBar info={info.thongTinPhim} />
            <Box className={styles.seatPlan}>{/* <SeatPlan /> */}</Box>
          </Grid>
          <Grid item xs={12} xl={4}>
            <Box className={styles.priceInfo}>
              <PriceInfo info={info.thongTinPhim} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  } else {
    return <Redirect to="/signin" />;
  }
};

export default Booking;
