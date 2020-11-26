import { Box, Container, Grid, Link, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

const socials = [
  {
    logo: "https://tix.vn/app/assets/img/icons/facebook-logo.png",
    url: "https://www.facebook.com/",
    alt: "facebook",
  },
  {
    logo: "https://tix.vn/app/assets/img/icons/zalo-logo.png",
    url: "https://id.zalo.me/account?continue=https%3A%2F%2Fchat.zalo.me%2F",
    alt: "zalo",
  },
];

const cinemas = [
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
    <Box className={styles.root}>
      <Container maxWidth="lg">
        <Grid container spacing={1} className={styles.container}>
          <Grid item xs={6} lg={3}>
            <Box>
              <Typography variant="body1" className={styles.title}>
                Liên kết
              </Typography>

              {socials.map((social, index) => (
                <Link href={social.url} key={index}>
                  <img
                    className={styles.logo}
                    src={social.logo}
                    alt={social.alt}
                  />
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} lg={5}>
            <Box>
              <Typography variant="body1" className={styles.title}>
                Hệ thống rạp
              </Typography>
              {cinemas.map((item, index) => (
                <Link href="#" key={index}>
                  <img
                    className={styles.logo}
                    src={item.logo}
                    alt={item.maHeThongRap}
                  />
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} lg={2}>
            <Box>
              <Typography variant="body1" className={styles.title}>
                Danh sách
              </Typography>
              <Link href="#" className={styles.link} variant="body2">
                Lịch chiếu
              </Link>
              <Link href="#" className={styles.link} variant="body2">
                Cụm rạp
              </Link>
            </Box>
          </Grid>

          <Grid item xs={6} lg={2}>
            <Box>
              <Typography variant="body1" className={styles.title}>
                Hot line
              </Typography>
              <Link href="#" className={styles.link} variant="body2">
                0123456789
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
