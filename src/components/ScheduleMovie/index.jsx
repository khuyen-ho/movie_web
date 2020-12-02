import { Container, Grid } from "@material-ui/core";
import React, { Component } from "react";
import DaysOfWeek from "../DaysOfWeek";
import MovieLogoList from "../MovieLogoList";
import ShowTime from "../ShowTimes";
import useStyles from "./style";

const ScheduleMovie = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Grid className={classes.bigScreen} container>
          <Grid item xs={12} md={2}>
            <MovieLogoList />
          </Grid>
          <Grid xs={12} item md={10}>
            <DaysOfWeek />
            {/* CHINH PHAN NAY, CHIEU NHIEU PHIM, HARDCODE LAY DU LIEU TU BACKEND */}
            <ShowTime />
          </Grid>
        </Grid>
        <Grid className={classes.smallScreen} container>
          <Grid>
            <DaysOfWeek />
            <MovieLogoList />
          {/* <ShowTime/> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default ScheduleMovie;
