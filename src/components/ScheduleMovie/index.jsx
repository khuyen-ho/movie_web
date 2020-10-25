import { Container, Grid } from "@material-ui/core";
import React, { Component } from "react";
import DaysOfWeek from "../DaysOfWeek";
import MovieLogoList from "../MovieLogoList";
import ShowTime from "../ShowTimes";

const ScheduleMovie = () => {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={2}>
            <MovieLogoList />
          </Grid>
          <Grid item xs={10}>
            <DaysOfWeek />
            <ShowTime />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default ScheduleMovie;
