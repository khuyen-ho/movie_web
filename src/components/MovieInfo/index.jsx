import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Typography } from "@material-ui/core";
import useStyles from "./style";

const MovieInfo = ({hasInfo , movie}) => {
  const styles = useStyles();
   console.log(movie);
  return (
    <>
      <Avatar src={movie.hinhAnh} variant="square" className={styles.logo} />
      {hasInfo && (
        <Box>
          <Typography variant="subtitle2" component="p" className={styles.name}>
            {movie.tenPhim}
          </Typography>
          <Typography variant="subtitle2" component="p" className={styles.info}>
            {/* {duration} phút */}
          </Typography>
        </Box>
      )}
    </>
  );
};

// MovieInfo.propTypes = {
//   id: PropTypes.number,
//   logo: PropTypes.string,
//   name: PropTypes.string,
//   duration: PropTypes.number,
//   score: PropTypes.number,
//   hasInfo: PropTypes.bool,
// };

export default MovieInfo;
