import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Typography } from "@material-ui/core";
import useStyles from "./style";

const MovieInfo = ({ id, logo, name, duration, score, hasInfo }) => {
  const styles = useStyles();

  return (
    <>
      <Avatar src={logo} variant="square" className={styles.logo} />
      {hasInfo && (
        <Box>
          <Typography variant="subtitle2" component="p" className={styles.name}>
            {name}
          </Typography>
          <Typography variant="subtitle2" component="p" className={styles.info}>
            {duration} phút
          </Typography>
        </Box>
      )}
    </>
  );
};

MovieInfo.propTypes = {
  id: PropTypes.number,
  logo: PropTypes.string,
  name: PropTypes.string,
  duration: PropTypes.number,
  score: PropTypes.number,
  hasInfo: PropTypes.bool,
};

export default MovieInfo;
