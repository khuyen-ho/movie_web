import React from "react";
import { Box } from "@material-ui/core";
import ScheduleMovie from "../../components/ScheduleMovie";
import MovieBannerDetail from "../../components/MovieBannerDetail";
import useStyles from "./style";

const MovieDetail = () => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <MovieBannerDetail />
      <ScheduleMovie />
    </Box>
  );
};

export default MovieDetail;
