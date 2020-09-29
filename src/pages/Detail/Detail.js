import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import Cinema from "../../components/cinema/Cinema";
import CinemaDetail from "../../components/cinema/CinemaDetail";
import style from "./styleDetail";
import { withStyles } from "@material-ui/core";
import CinemaMovie from "../../components/cinema/CinemaMovie";
class Detail extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Box className={classes.detail}>
        <Container>
          <Grid container>
            <Grid item xs={5}>
              <img src="http://movie0706.cybersoft.edu.vn/hinhanh/natra-two_gp01.png" />
            </Grid>
            <Grid item xs={7}>
              <Box mx={3}>
                <Typography component="h4" variant="h4">
                  Title
                </Typography>
                <Typography component="h6" variant="h6">
                  Describe
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Typography className={classes.title} component="h4" variant="h4">
            Cinema
          </Typography>
          <Box className={classes.cinema}>
            <Grid className='calendar' container>
              <Grid item xs={2}>
                <Cinema />
              </Grid>
              <Grid item xs={10}>
                <CinemaMovie />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    );
  }
}
export default withStyles(style)(Detail);
