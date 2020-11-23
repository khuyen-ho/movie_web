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
          <Grid item xs={12} md={2}>
            <MovieLogoList />
          </Grid>
          <Grid xs={12} item md={10}>
            <DaysOfWeek />
            {/* CHINH PHAN NAY, CHIEU NHIEU PHIM, HARDCODE LAY DU LIEU TU BACKEND */}
            <ShowTime />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default ScheduleMovie;
