import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import useStyles from "./style";

const cinema = [
  {
    maHeThongRap: "BHDStar",
    tenHeThongRap: "BHD Star Cineplex",
    biDanh: "bhd-star-cineplex",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
  },
  {
    maHeThongRap: "CGV",
    tenHeThongRap: "cgv",
    biDanh: "cgv",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png",
  },
  {
    maHeThongRap: "CineStar",
    tenHeThongRap: "CineStar",
    biDanh: "cinestar",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png",
  },
  {
    maHeThongRap: "Galaxy",
    tenHeThongRap: "Galaxy Cinema",
    biDanh: "galaxy-cinema",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png",
  },
  {
    maHeThongRap: "LotteCinima",
    tenHeThongRap: "Lotte Cinema",
    biDanh: "lotte-cinema",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png",
  },
  {
    maHeThongRap: "MegaGS",
    tenHeThongRap: "MegaGS",
    biDanh: "megags",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/megags.png",
  },
];

const Footer = (props) => {
  const styles = useStyles();
  return (
    <Box className={styles.root} py={1}>
      <Container>
        <Grid container>
          <Grid item xs={6} md={3}>
            <Container>
              <div className={styles.social}>
                <h2 className={styles.title}>LIÊN KẾT</h2>
                <Grid container>
                  <Grid item xs={6}>
                    <a href="" className={styles.media}>
                      <FacebookIcon className={styles.icon} />
                    </a>
                  </Grid>
                  <Grid item xs={6}>
                    <a href="" className={styles.media}>
                      <YouTubeIcon className={styles.icon} />
                    </a>
                  </Grid>
                  <Grid item xs={6}>
                    <a href="" className={styles.media}>
                      <TwitterIcon className={styles.icon} />
                    </a>
                  </Grid>
                  <Grid item xs={6}>
                    <a href="" className={styles.media}>
                      <InstagramIcon className={styles.icon} />
                    </a>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </Grid>
          <Grid item xs={6} md={4}>
            <Container>
              <Box className={styles.cinema}>
                <h2 className={styles.title}>Hệ thống rạp</h2>
                <Grid container>
                  {cinema.map((item, index) => (
                    <Grid item xs={4} key={index}>
                      <img className={styles.logo} src={item.logo} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Container>
          </Grid>
          <Grid item xs={6} md={3}>
            <div className={styles.movie}>
              <h2 className={styles.title}>Phim</h2>
              <ul className={styles.list}>
                <li>
                  <a className={styles.tagA} href="">Phim đang chiếu</a>
                </li>
                <li>
                  <a className={styles.tagA}  href="">Lịch chiếu</a>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid xs={6} md={1}>
            <div className={styles.phone}>
              <h2 className={styles.title}>Hotline</h2>
              <ul className={styles.list}>
                <li>
                  <a className={styles.tagA} href="">0123456789</a>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
