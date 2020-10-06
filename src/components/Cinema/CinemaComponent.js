import { Box, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import style from "./styleCinema";
import { withStyles } from "@material-ui/core";
import Cinema from "./Cinema";
import CinemaDetail from "./CinemaDetail";
import { connect } from "react-redux";
import CinemaSchedule from "./CinemaSchedule";

class CinemaComponent extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Box my={5} mx={2}>
        <Typography className={classes.title2} component="h4" variant="h4">
          Cinema
        </Typography>
        <Grid className={classes.cinema} container>
          <Grid item xs={3} sm={2} lg={1}>
            <Cinema />
          </Grid>
          <Grid item xs={6} sm={4} lg={4}>
            <CinemaDetail />
          </Grid>
          <Grid item xs={3} sm={6} lg={7} className={classes.detail}>
            <CinemaSchedule/>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cinema: state.cinema,
    cinemaDetail: state.cinemaDetail,
  };
};

export default connect(mapStateToProps)(withStyles(style)(CinemaComponent));
