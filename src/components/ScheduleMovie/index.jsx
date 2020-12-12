import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import CinemaSystemList from "../CinemaSystemList";
import DaysOfWeek from "../DaysOfWeek";
import MovieLogoList from "../MovieLogoList";
import ShowTime from "../ShowTimes";
import useStyles from "./style";

const ScheduleMovie = () => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Container maxWith="lg">
        <Grid container className={styles.bigScreen}>
          <Grid item xs={12} md={3}>
            <CinemaSystemList />
          </Grid>
          <Grid xs={12} item md={9}>
            <DaysOfWeek />
            <ShowTime />
          </Grid>
        </Grid>
        <Grid className={styles.smallScreen} container>
          <Grid>
            <DaysOfWeek />
            <MovieLogoList />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ScheduleMovie;
