import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Typography } from "@material-ui/core";
import useStyles from "./style";

const CinemaSystem = ({ logo, name }) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Avatar src={logo} variant="square" className={styles.logo} />
      <Typography variant="subtitle1" component="p" className={styles.name}>
        {name}
      </Typography>
    </Box>
  );
};

CinemaSystem.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string,
};

CinemaSystem.defaultProps = {
  logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
  name: "BHD Star Cineplex",
};

export default CinemaSystem;
