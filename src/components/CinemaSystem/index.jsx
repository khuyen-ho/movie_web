import React from "react";
import PropTypes from "prop-types";
import { Avatar, Typography } from "@material-ui/core";
import useStyles from "./style";

const CinemaSystem = ({ id, logo, name, ...props }) => {
  const styles = useStyles();

  return (
    <>
      <Avatar src={logo} variant="square" className={styles.logo} />
      <Typography variant="subtitle2" component="p" className={styles.name}>
        {name}
      </Typography>
    </>
  );
};
CinemaSystem.propTypes = {
  id: PropTypes.string,
  logo: PropTypes.string,
  name: PropTypes.string,
};
CinemaSystem.defaultProps = {
  id: "BHDStar",
  logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
  name: "BHD Star Cineplex",
};

export default CinemaSystem;
