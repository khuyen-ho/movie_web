import React from "react";
import PropTypes from "prop-types";
import { Box, AppBar, Toolbar, useTheme, Typography } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MovieInfo from "../MovieInfo";
import CinemaInfo from "../CinemaInfo";
import Tag from "../Tag";
import useStyles from "./style";

const BookingNavBar = ({ movieInfo, cinemaInfo }) => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <AppBar className={styles.root}>
      <Toolbar className={`${styles.toolBar} ${styles.largeBar}`}>
        <Box className={styles.info}>
          <MovieInfo {...movieInfo} hasInfo />
        </Box>
        <Box className={styles.info}>
          <CinemaInfo {...cinemaInfo} hasInfo />
        </Box>
        <Typography
          color="secondary"
          variant="subtitle2"
          className={styles.notification}
        >
          Vui lòng chọn ghế!
        </Typography>
        <Box>
          <Tag
            iconElement={<AccountCircleIcon fontSize="large" />}
            color={theme.palette.secondary.main}
            hoverColor={theme.palette.secondary.main}
            title="ctlong"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

BookingNavBar.propTypes = {
  movieInfo: PropTypes.object,
  cinemaInfo: PropTypes.object,
  showTimeInfo: PropTypes.object,
};

BookingNavBar.defaultProps = {
  movieInfo: {
    id: 1283,
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/trainwreck.jpg",
    name: "Trainwreck",
    duration: 100,
    score: 5.2,
  },
  cinemaInfo: {
    id: "bhd-star-cineplex-3-2 ",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
    name: "BHD Star Cineplex - 3/2",
    address: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
  },
};

export default BookingNavBar;
