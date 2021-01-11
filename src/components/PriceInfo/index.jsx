import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Grid, TextField, Button } from "@material-ui/core";
import useStyles from "./style";

const PriceInfo = ({ showTimeInfo, userInfo }) => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Box className={`${styles.totalPrice} ${styles.dashedBoder}`}>
        <Typography variant="h4" className={`${styles.price} ${styles.center}`}>
          0 VND
        </Typography>
      </Box>

      <Box className={`${styles.showTimeInfo} ${styles.dashedBoder}`}>
        <Typography variant="subtitle1">
          Tên phim: {showTimeInfo.movieName}
        </Typography>
        <Typography variant="body1">{`Rạp: ${showTimeInfo.cinema} - ${showTimeInfo.cinemaNumber}`}</Typography>
        <Typography variant="body1">{`Suất chiếu: ${showTimeInfo.showTime} - ${showTimeInfo.showTimeDate}`}</Typography>
      </Box>
      <Grid container className={`${styles.seats} ${styles.dashedBoder}`}>
        <Grid item xs={7}>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            component="span"
          >
            {`Ghế: `}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            component="span"
          >
            01, 02, 03, 04
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography className={`${styles.price} ${styles.right}`}>
            0 VND
          </Typography>
        </Grid>
      </Grid>

      <Box className={styles.userInfo}>
        <TextField
          className={styles.input}
          label="Email"
          variant="outlined"
          value={userInfo.email}
        />
        <TextField
          className={styles.input}
          label="Số điện thoại"
          variant="outlined"
          type="text"
          value={userInfo.phoneNumber}
        />
      </Box>

      <Button variant="contained" color="secondary" className={styles.button}>
        ĐẶT VÉ
      </Button>
    </Box>
  );
};

PriceInfo.propTypes = {
  showTimeInfo: PropTypes.object,
  userInfo: PropTypes.object,
};

PriceInfo.defaultProps = {
  showTimeInfo: {
    id: 15290,
    movieName: "Trainwreck",
    cinema: "BHD Star Cineplex - 3/2",
    cinemaNumber: "Rạp 2",
    showTimeDate: "01/01/2019",
    showTime: "12:01",
  },
  userInfo: {
    email: "long@gmail.com",
    phoneNumber: "0123456789",
  },
};

export default PriceInfo;
