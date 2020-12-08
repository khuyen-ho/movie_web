import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Typography } from "@material-ui/core";
import useStyles from "./style";

const CinemaInfo = ({ logo, name, address, openTimeList }) => {
  const styles = useStyles();

  return (
    <Box className={styles.root} onClick={openTimeList}>
      <Avatar src={logo} variant="square" className={styles.logo} />
      <Box>
        <Typography variant="subtitle1" component="p" className={styles.name}>
          {name}
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
  name: PropTypes.string,
  address: PropTypes.string,
};

CinemaInfo.defaultProps = {
  logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
  name: "BHD Star Cineplex - 3/2",
  address: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
};

export default CinemaInfo;
