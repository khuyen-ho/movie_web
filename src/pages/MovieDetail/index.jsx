import React from "react";
import { Box } from "@material-ui/core";
import ScheduleMovieDetail from "../../components/ScheduleMovieDetail";
import MovieBannerDetail from "../../components/MovieBannerDetail";
import useStyles from "./style";
import wrapper from "../../HOCs/Wrapper";
const MovieDetail = (props) => {
  const styles = useStyles();
  // console.log(props.match);
  return (
    <Box className={styles.root}>
      <MovieBannerDetail />
      <ScheduleMovieDetail />
    </Box>
  );
};

export default wrapper(MovieDetail);
