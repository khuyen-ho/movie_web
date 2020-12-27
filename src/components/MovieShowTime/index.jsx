import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Collapse } from "@material-ui/core";
import MovieInfo from "../MovieInfo";
import StartTimeList from "../StartTimeList";
import useStyles from "./style";

const MovieShowTime = ({
  movieId,
  movieLogo,
  movieName,
  movieDuration,
  movieScore,
  showTimeList,
}) => {
  const styles = useStyles();
  const [open, setOpen] = useState(true);

  return (
    <Box className={styles.root}>
      <Box className={styles.movieInfo} onClick={() => setOpen(!open)}>
        <MovieInfo
          id={movieId}
          logo={movieLogo}
          name={movieName}
          duration={movieDuration}
          score={movieScore}
        />
      </Box>

      <Collapse in={open} timeout="auto">
        <StartTimeList list={showTimeList} />
      </Collapse>
    </Box>
  );
};

MovieShowTime.propTypes = {
  movieId: PropTypes.number,
  movieLogo: PropTypes.string,
  movieName: PropTypes.string,
  movieDuration: PropTypes.number,
  movieScore: PropTypes.number,
  showTimeList: PropTypes.array,
};

MovieShowTime.defaultProps = {
  movieId: 1283,
  movieLogo: "http://movie0706.cybersoft.edu.vn/hinhanh/trainwreck.jpg",
  movieName: "Trainwreck",
  movieDuration: 100,
  movieScore: 5.2,
  showTimeList: [
    {
      start: "2019-01-01T10:10:00",
      duration: 100,
    },
    {
      start: "2019-01-01T11:30:00",
      duration: 123,
    },
    {
      start: "2019-01-01T12:20:00",
      duration: 180,
    },
    {
      start: "2019-01-01T15:40:00",
      duration: 200,
    },
    {
      start: "2019-01-01T18:10:00",
      duration: 100,
    },
    {
      start: "2019-01-01T21:20:00",
      duration: 145,
    },
  ],
};

export default MovieShowTime;
