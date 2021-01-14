import React from "react";
import { Box } from "@material-ui/core";
import Carousel from "../../components/Carousel";
import SearchMovie from "../../components/SearchMovie";
import MovieList from "../../components/MovieList";
import ScheduleCinema from "../../components/ScheduleCinema";
import useStyles from "./style";
import wrapper from '../../HOCs/Wrapper'
import { useEffect } from "react";
const Home = () => {
  const styles = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Box className={styles.root}>
      <Carousel />
      <SearchMovie />
      <MovieList />
      <ScheduleCinema />
    </Box>
  );
};

export default wrapper(Home);
