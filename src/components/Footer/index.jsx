import { Box, Container, Grid, Link, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import { useSelector } from "react-redux";
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

const cinemaSystem = [
  {
    alt: "BHDStar",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
    url: "https://www.bhdstar.vn/",
  },
  {
    alt: "CGV",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png",
    url: "https://www.cgv.vn/",
  },
  {
    alt: "CineStar",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png",
    url: "https://cinestar.com.vn/",
  },
  {
    alt: "Galaxy",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png",
    url: "https://www.galaxycine.vn/",
  },
  {
    alt: "LotteCinema",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png",
    url: "http://www.lottecinemavn.com/LCHS/Contents/Movie/Movie-List.aspx",
  },
  {
    maHeThongRap: "MegaGS",
    tenHeThongRap: "MegaGS",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/megags.png",
    url: "https://www.megagscinemas.vn/",
  },
];

const Footer = (props) => {
  const styles = useStyles();
  const { url } = useSelector((state) => state.currentPage);

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
                <a href={social.url} key={index}>
                  <img
                    className={styles.logo}
                    src={social.logo}
                    alt={social.alt}
                  />
                </a>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} lg={5}>
            <Box>
              <Typography variant="body1" className={styles.title}>
                Hệ thống rạp
              </Typography>
              {cinemaSystem.map((item, index) => (
                <a href={item.url} key={index}>
                  <img
                    className={styles.logo}
                    src={item.logo}
                    alt={item.maHeThongRap}
                  />
                </a>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} lg={2}>
            <Box>
              <Typography variant="body1" className={styles.title}>
                Danh sách
              </Typography>
              {url === "/home" ? (
                <>
                  <Link
                    href="#movieList"
                    className={styles.link}
                    variant="body2"
                  >
                    Lịch chiếu
                  </Link>
                  <Link
                    href="#scheduleCinema"
                    className={styles.link}
                    variant="body2"
                  >
                    Cụm rạp
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/home#movieList"
                    className={styles.link}
                    variant="body2"
                  >
                    Lịch chiếu
                  </Link>
                  <Link
                    href="/home#scheduleCinema"
                    className={styles.link}
                    variant="body2"
                  >
                    Cụm rạp
                  </Link>
                </>
              )}
            </Box>
          </Grid>

          <Grid item xs={6} lg={2}>
            <Box>
              <Typography variant="body1" className={styles.title}>
                Hot line
              </Typography>
              <Typography href="#" className={styles.link} variant="body2">
                0123456789
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
