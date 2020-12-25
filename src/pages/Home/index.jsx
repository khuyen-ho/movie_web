import React from "react";
import Carousel from "../../components/Carousel";
import SearchMovie from "../../components/SearchMovie";
import MovieList from "../../components/MovieList";
import ScheduleCinema from "../../components/ScheduleCinema";

const Home = () => {
  return (
    <>
      <Carousel />
      <SearchMovie />
      <MovieList />
      <ScheduleCinema />
    </>
  );
};

export default Home;
