import React from "react";
import { Box, AppBar, Toolbar, useTheme, Typography } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MovieInfo from "../MovieInfo";
import CinemaInfo from "../CinemaInfo";
import Tag from "../Tag";
import useStyles from "./style";
import { useSelector } from "react-redux";

const BookingNavBar = (props) => {
  const styles = useStyles();
  const theme = useTheme();
  const movieInfo = useSelector((state) => state.booking.thongTinPhim);

  return (
    <AppBar className={styles.root}>
      <Toolbar className={`${styles.toolBar} ${styles.largeBar}`}>
        <Box className={styles.info}>
          <MovieInfo movie={movieInfo} hasInfo />
        </Box>
        <Box className={styles.info}>
          <CinemaInfo cinema={movieInfo} hasInfo />
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

export default BookingNavBar;
