
import { Box, Container, Typography } from "@material-ui/core";
import React, { Component } from "react";
import style from './styleFooter'
import {withStyles} from '@material-ui/core'

class Footer extends Component {
  render() {
      const {classes} = this.props
    return (
      <Box className={classes.foot} py={1}>
        <Container>
          <Typography component="p">Cao Thanh Long</Typography>
          <Typography component="p">Ho Lam Bao Khuyen</Typography>
        </Container>
      </Box>
    );
  }
}
export default withStyles(style)(Footer)