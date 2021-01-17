import React from "react";
import { Box } from "@material-ui/core";
import ScheduleMovieDetail from "../../components/ScheduleMovieDetail";
import MovieBannerDetail from "../../components/MovieBannerDetail";
import BackToTop from "../../components/BackToTop";
import useStyles from "./style";

const MovieDetail = () => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <MovieBannerDetail />
      <ScheduleMovieDetail />
      <BackToTop showBelow={300} />
    </Box>
  );
};

export default MovieDetail;
