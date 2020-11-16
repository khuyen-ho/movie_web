import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Typography, Grid } from "@material-ui/core";
import MovieItem from "../MovieItem";
import useStyles from "./style";
import { getMovieList } from "../../redux/actions/movieAction";
import Pagination from "@material-ui/lab/Pagination";

const MovieList = () => {
  const movies = useSelector((state) => state.movies.items);
  const totalPages = useSelector((state) => state.movies.pageCount);
  const dispatch = useDispatch();
  const style = useStyles();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getMovieList(page, 8));
  }, [dispatch, page]);

  const renderMovie = (movies) => {
    return movies.map((movie, index) => {
      return (
        <Grid item xs={6} sm={4} lg={3}>
          <MovieItem key={index} {...movie} />
        </Grid>
      );
    });
  };

  return (
    <Container maxWidth="lg" className={style.container}>
      <Typography className={style.title} component="h1" variant="h5">
        Phim đang chiếu
      </Typography>
      <Grid container spacing={3}>
        {renderMovie(movies)}
      </Grid>
      <Pagination
        siblingCount={0}
        count={totalPages}
        shape="round"
        color="secondary"
        size="large"
        onChange={(event, value) => setPage(value)}
        classes={{ root: style.pagination, ul: style.pageList }}
      />
    </Container>
  );
};

export default MovieList;
