import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import style from "./style";
import { withStyles } from "@material-ui/core";
import HdIcon from "@material-ui/icons/Hd";
import { connect } from "react-redux";
class Footer extends Component {
  renderLogo = () => {
    return this.props.cinema.map((logo) => <img src={logo.logo} />);
  };
  render() {
    const { classes } = this.props;
    return (
      <Box className={classes.foot} py={1}>
        <Container>
          <Grid container>
            <Grid item xs={2} md={3}>
              <HdIcon />
            </Grid>
            <Grid item xs={5} md={4}>
              <Typography className='title' component="p" variant="subtitle">
                ĐỐI TÁC
              </Typography>
              {this.renderLogo()}
            </Grid>
            <Grid item xs={5} md={5}>
              <Typography className='title' component="p" variant="subtitle">
                LIÊN HỆ
              </Typography>
              <Typography className='phone' component="p">Phone: 0123456789</Typography>
              <Typography  className='mail' component="p">Gmail: abc12345@gmail.com</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cinema: state.cinema,
  };
};

export default connect(mapStateToProps)(withStyles(style)(Footer));
