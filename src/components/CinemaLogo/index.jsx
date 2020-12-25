import React from "react";
import PropTypes from "prop-types";
import { Avatar, ListItemIcon } from "@material-ui/core";
import useStyles from "./style";

const CinemaLogo = ({ id, logo }) => {
  const styles = useStyles();

  return (
    <ListItemIcon className={styles.icon}>
      <Avatar src={logo} variant="square" className={styles.logo} />
    </ListItemIcon>
  );
};

CinemaLogo.propTypes = {
  id: PropTypes.string,
  logo: PropTypes.string,
};

CinemaLogo.defaultProps = {
  id: "BHDStar",
  logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
};

export default CinemaLogo;
