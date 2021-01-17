import React from "react";
import { Box } from "@material-ui/core";
import Carousel from "../../components/Carousel";
import SearchMovie from "../../components/SearchMovie";
import MovieList from "../../components/MovieList";
import ScheduleCinema from "../../components/ScheduleCinema";
import BackToTop from "../../components/BackToTop";
import useStyles from "./style";

const Home = () => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Carousel />
      <SearchMovie />
      <MovieList />
      <ScheduleCinema />
      <BackToTop showBelow={300} />
    </Box>
  );
};

export default Home;
