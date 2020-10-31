import React from "react";
import Carousel from "../../components/Carousel";
import SearchMovie from "../../components/SearchMovie";
import MovieList from "../../components/MovieList";

const Home = () => {
  return (
    <>
      <Carousel />
      <SearchMovie />
      <MovieList />
    </>
  );
};

export default Home;
