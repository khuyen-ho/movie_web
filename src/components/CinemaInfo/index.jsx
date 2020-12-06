import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Typography } from "@material-ui/core";
import useStyles from "./style";

const CinemaInfo = ({ logo, cinemaName, address }) => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Avatar src={logo} variant="square" className={styles.logo}></Avatar>
      <Box>
        <Typography variant="subtitle1" component="p" className={styles.name}>
          {cinemaName}
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          className={styles.address}
        >
          {address}
        </Typography>
      </Box>
    </Box>
  );
};

CinemaInfo.propTypes = {
  logo: PropTypes.string,
  cinemaName: PropTypes.string,
  address: PropTypes.string,
};

CinemaInfo.defaultProps = {
  logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
  cinemaName: "BHD Star Cineplex - 3/2",
  address: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
};

export default CinemaInfo;
