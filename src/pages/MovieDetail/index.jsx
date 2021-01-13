import React from "react";
import { Box } from "@material-ui/core";
import ScheduleMovieDetail from "../../components/ScheduleMovieDetail";
import MovieBannerDetail from "../../components/MovieBannerDetail";
import useStyles from "./style";
import wrapper from "../../HOCs/Wrapper";
const MovieDetail = () => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <MovieBannerDetail />
      <ScheduleMovieDetail />
    </Box>
  );
};

export default wrapper(MovieDetail);
