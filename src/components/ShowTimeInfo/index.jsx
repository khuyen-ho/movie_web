import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Typography } from "@material-ui/core";
import useStyles from "./style";

const MovieInfo = ({ logo, name, duration }) => {
  const styles = useStyles();
  return (
    <>
      <Avatar src={logo} variant="square" className={styles.logo} />
      <Box>
        <Typography variant="subtitle2" component="p" className={styles.name}>
          {name}
        </Typography>
        <Typography
          variant="subtitle2"
          component="span"
          className={styles.info}
        >
          {duration} phút
        </Typography>
      </Box>
    </>
  );
};

MovieInfo.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string,
  duration: PropTypes.number,
};

MovieInfo.defaultProps = {
  logo: "http://movie0706.cybersoft.edu.vn/hinhanh/trainwreck.jpg",
  name: "Trainwreck",
  duration: 100,
};

export default MovieInfo;
