import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Typography } from "@material-ui/core";
import useStyles from "./style";

const MovieInfo = ({ id, logo, name, duration, score, ...props }) => {
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
        <Typography
          variant="subtitle2"
          component="span"
          className={styles.info}
        >
          - {score}
        </Typography>
      </Box>
    </>
  );
};

MovieInfo.propTypes = {
  id: PropTypes.number,
  logo: PropTypes.string,
  name: PropTypes.string,
  duration: PropTypes.number,
  score: PropTypes.number,
};

MovieInfo.defaultProps = {
  id: 1283,
  logo: "http://movie0706.cybersoft.edu.vn/hinhanh/trainwreck.jpg",
  name: "Trainwreck",
  duration: 100,
  score: 5.2,
};

export default MovieInfo;
