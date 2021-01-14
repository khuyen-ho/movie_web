import React from "react";
import { Box } from "@material-ui/core";
import ScheduleMovieDetail from "../../components/ScheduleMovieDetail";
import MovieBannerDetail from "../../components/MovieBannerDetail";
import useStyles from "./style";
import wrapper from "../../HOCs/Wrapper";
import { useEffect } from "react";
const MovieDetail = (props) => {
  const styles = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Box className={styles.root}>
      <MovieBannerDetail />
      <ScheduleMovieDetail />
    </Box>
  );
};

export default wrapper(MovieDetail);
