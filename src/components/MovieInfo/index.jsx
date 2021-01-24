import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Typography } from "@material-ui/core";
import useStyles from "./style";

const MovieInfo = ({ hasInfo, movie }) => {
  const styles = useStyles();

  return (
    <>
      <Avatar src={movie.hinhAnh} variant="square" className={styles.logo} />
      {hasInfo && (
        <Box>
          <Typography variant="subtitle2" component="p" className={styles.name}>
            {movie.tenPhim}
          </Typography>
          <Typography variant="subtitle2" component="p" className={styles.info}>
            {/* {movie.thoiLuong} phút */}
          </Typography>
        </Box>
      )}
    </>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
  hasInfo: PropTypes.bool,
};

MovieInfo.defaultProps = {
  movie: {},
  hasInfo: false,
};

export default MovieInfo;
