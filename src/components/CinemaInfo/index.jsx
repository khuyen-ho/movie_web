import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Typography } from "@material-ui/core";
import useStyles from "./style";

const CinemaInfo = ({ id, logo, name, address }) => {
  const styles = useStyles();

  return (
    <>
      <Avatar src={logo} variant="square" className={styles.logo} />
      <Box>
        <Typography
          variant="subtitle2"
          component="p"
          className={`${styles.name} ${styles.ellipsis}`}
        >
          {name}
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          className={`${styles.address} ${styles.ellipsis}`}
        >
          {address}
        </Typography>
      </Box>
    </>
  );
};

CinemaInfo.propTypes = {
  id: PropTypes.string,
  logo: PropTypes.string,
  name: PropTypes.string,
  address: PropTypes.string,
};

CinemaInfo.defaultProps = {
  id: "bhd-star-cineplex-3-2",
  logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
  name: "BHD Star Cineplex - 3/2",
  address: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
};

export default CinemaInfo;
