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
            <Grid item xs={6} md={3}>
              <div className="social">
                <h2>LIÊN KẾT</h2>
                <ul>
                  <li>
                    <a href="">Facebook</a>
                  </li>
                  <li>
                    <a href="">Youtube</a>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className="cinema">
                <h2>Hệ thống rạp</h2>
                <ul>
                  <li>
                    <a href="">Cinema1</a>
                  </li>
                  <li>
                    <a href="">Cinema2</a>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className="movie">
                <h2>Phim</h2>
                <ul>
                  <li>
                    <a href="">Phim đang chiếu</a>
                  </li>
                  <li>
                    <a href="">Lịch chiếu</a>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid xs={6} md={3}>
              <div className="phone">
                <h2>Hotline</h2>
                <ul>
                  <li>
                    <a>0123456789</a>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={12} md={12}>
              <div className="logo">
                {this.renderLogo()}
                <img src="http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" />
                <img src="http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" />
                <img src="http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" />
                <img src="http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" />
                <img src="http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" />
              </div>
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
