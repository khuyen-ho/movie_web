import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import style from "./style";
import { withStyles } from "@material-ui/core";
import HdIcon from "@material-ui/icons/Hd";
import { connect } from "react-redux";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
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
            <Grid item xs={6} md={2}>
              <div className="social">
                <h2>LIÊN KẾT</h2>
<Box>
                <Grid container>
                  <Grid item xs={6}>
                    <a href="">
                      <FacebookIcon />
                    </a>
                  </Grid>
                  <Grid item xs={6}>
                    <a href="">
                      <YouTubeIcon />
                    </a>
                  </Grid>

                  <Grid item xs={6}>
                    <a className="twitter" href="">
                      <TwitterIcon />
                    </a>
                  </Grid>
                  <Grid item xs={6}>
                    <a className="zalo" href="">
                      <InstagramIcon />
                    </a>
                  </Grid>
                </Grid>
                </Box>
              </div>
            </Grid>
            <Grid item xs={6} md={4}>
              <Container>
                <Box className="cinema" textAlign="center">
                  <h2>Hệ thống rạp</h2>
                  <Grid container>
                    <Grid item xs={4}>
                      <img src="http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" />
                    </Grid>
                    <Grid item xs={4}>
                      <img src="http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" />
                    </Grid>
                    <Grid item xs={4}>
                      <img src="http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" />
                    </Grid>
                    <Grid item xs={4}>
                      <img src="http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" />
                    </Grid>
                    <Grid item xs={4}>
                      <img src="http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" />
                    </Grid>
                    <Grid item xs={4}>
                      <img src="http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" />
                    </Grid>
                  </Grid>
                </Box>
              </Container>
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
