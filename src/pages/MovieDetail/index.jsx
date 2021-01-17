import React from "react";
import { Box } from "@material-ui/core";
import ScheduleMovieDetail from "../../components/ScheduleMovieDetail";
import MovieBannerDetail from "../../components/MovieBannerDetail";
import BackToTop from "../../components/BackToTop";
import useStyles from "./style";
import wrapper from "../../HOCs/Wrapper";
import { useEffect } from "react";
import { getCurrentWebPage } from "../../redux/actions/pageAction";
import { useDispatch } from "react-redux";
const MovieDetail = (props) => {
  const styles = useStyles();
  const dispatch = useDispatch()
  
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getCurrentWebPage(props.match.url))
  },[]);
  // console.log(props);
  return (
    <Box className={styles.root}>
      <MovieBannerDetail props={props}/>
      <ScheduleMovieDetail />
      <BackToTop showBelow={300} />
    </Box>
  );
};

export default wrapper(MovieDetail);
