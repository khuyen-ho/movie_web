import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import ScheduleMovieDetail from "../../components/ScheduleMovieDetail";
import MovieBannerDetail from "../../components/MovieBannerDetail";
import useStyles from "./style";
import wrapper from "../../HOCs/Wrapper";
import { useEffect } from "react";
import { getCurrentWebPage } from "../../redux/actions/pageAction";
import { getMovieShowTimes } from "../../redux/actions/showTimeAction";
import { useDispatch } from "react-redux";

const MovieDetail = (props) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getCurrentWebPage(props.match.url));
    dispatch(getMovieShowTimes(props.match.params.id));
  }, [dispatch, props.match.params.id, props.match.url]);

  return (
    <Box className={styles.root}>
      <MovieBannerDetail />
      <ScheduleMovieDetail />
    </Box>
  );
};

export default wrapper(MovieDetail);
