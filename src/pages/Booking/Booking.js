import { Box, Container, Grid } from "@material-ui/core";
import React, { Component } from "react";
import Price from "../../components/Price/Price";
import Seat from "../../components/Seat/Seat";
import style from './styleBooking'
import {withStyles} from '@material-ui/core'

class Booking extends Component {
  render() {
      const {classes}=this.props
    return (
      <Box className={classes.booking} padding={5}>
        <Container>
          <Grid container>
            <Grid className={classes.seat} item xs={9}>
              <Seat />
            </Grid>
            <Grid item xs={3}>
              <Price />
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }
}
export default withStyles(style)(Booking)