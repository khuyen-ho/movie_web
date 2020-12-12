import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Typography } from "@material-ui/core";
import useStyles from "./style";

const CinemaInfo = ({ logo, name, address, open }) => {
  const styles = useStyles();

  return (
    <Box className={styles.root} onClick={open}>
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
  logo: "",
  name: "",
  address: "",
};

export default CinemaInfo;
