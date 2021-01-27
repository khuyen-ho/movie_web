import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Container, Grid, List } from "@material-ui/core";
import CinemaSystemList from "../CinemaSystemList";
import MovieShowTimeList from "../MovieShowTimeList";
import DaysOfWeek from "../DaysOfWeek";
import useStyles from "./style";
import {
  getSystems,
  getCinemaOnDate,
  getShowTimeDates,
} from "../../helpers/movie-detail-manager";
import { GET_DATE_LIST } from "../../redux/actions/actionType";

const ScheduleMovieDetail = (props) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movieDetail);

  const systems = getSystems(data);
  const selectedSystem = useSelector((state) => state.cinemaSystems.selected);
  const selectedDate = useSelector((state) => state.date.selected);
  const cinemas = getCinemaOnDate(data, selectedSystem, selectedDate);

  useEffect(() => {
    dispatch({ type: GET_DATE_LIST, payload: getShowTimeDates(data) });
  }, [data, dispatch]);

  return (
    <Container maxWidth="lg" className={styles.container}>
      <Grid container className={styles.largeScreen}>
        <Grid item xs={3}>
          <List
            className={`${styles.list} 
              ${styles.noRightBorder}
              ${styles.noTopRightRadius}
              ${styles.noBottomRightRadius}`}
          >
            <CinemaSystemList systemList={systems} hasName />
          </List>
        </Grid>
        <Grid item xs={9}>
          <Box height={99}>
            <DaysOfWeek />
          </Box>
          <List
            style={{ height: 601, borderTop: "none" }}
            className={`${styles.list}
              ${styles.noRightBorder} 
              ${styles.noTopLeftRadius} 
              ${styles.noBottomLeftRadius}
              ${styles.noTopRightRadius} 
              ${styles.noBottomRightRadius}
              ${styles.verticalScroll}`}
          >
            <MovieShowTimeList cinemas={cinemas} date={selectedDate} />
          </List>
        </Grid>
      </Grid>
      <Grid className={styles.smallScreen} container>
        <Grid item xs={12}>
          <Box height={99}>
            <DaysOfWeek />
          </Box>
          <List
            className={`${styles.list} 
              ${styles.noTopLeftRadius} 
              ${styles.noBottomLeftRadius}
              ${styles.noTopRightRadius} 
              ${styles.noBottomRightRadius}`}
          >
            <CinemaSystemList
              hasName
              systemList={systems}
              showList={
                <MovieShowTimeList cinemas={cinemas} date={selectedDate} />
              }
            />
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ScheduleMovieDetail;
