import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Grid, Box } from "@material-ui/core";
import useStyle from "./style";
import DropDown from "../DropDown";
import { getShowTimeDetail } from "../../redux/actions/movieAction";
import {
  GET_SEARCH_MOVIE,
  GET_SEARCH_CINEMA,
  GET_SEARCH_DATE,
  GET_SEARCH_SHOW_TIME,
} from "../../redux/actions/actionType";
import {
  getMovieId,
  getCinemas,
  getShowTimeDate,
  getShowTimes,
} from "../../helpers/search-manager";

const SearchMovie = (props) => {
  const styles = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();
  const movies = useSelector((state) => state.movies);
  const movieNames = useSelector((state) => state.movies).map(
    (movie) => movie.tenPhim
  );
  const result = useSelector(
    (state) => state.searchMovie.advancedSearch.result
  );
  const movie = useSelector((state) => state.searchMovie.advancedSearch.movie);
  const cinema = useSelector(
    (state) => state.searchMovie.advancedSearch.cinema
  );
  const date = useSelector((state) => state.searchMovie.advancedSearch.date);
  const showTime = useSelector(
    (state) => state.searchMovie.advancedSearch.showTime
  );

  useEffect(() => {
    dispatch(getShowTimeDetail(getMovieId(movies, movie)));
  }, [dispatch, movie, movies]);

  return (
    <Container maxWidth="lg">
      <Box className={styles.root}>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={4}>
            <Box className={styles.dropDown}>
              <DropDown
                label="Phim"
                list={movieNames}
                state={movie}
                dispatchType={GET_SEARCH_MOVIE}
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={2}>
            <Box className={styles.dropDown}>
              <DropDown
                label="Rạp"
                state={cinema}
                list={getCinemas(result)}
                dispatchType={GET_SEARCH_CINEMA}
                placeHolder="Vui lòng chọn phim"
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={2}>
            <Box className={styles.dropDown}>
              <DropDown
                label="Ngày xem"
                state={date}
                list={getShowTimeDate(result, cinema)}
                dispatchType={GET_SEARCH_DATE}
                placeHolder="Vui lòng chọn phim và rạp"
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={2}>
            <Box className={styles.dropDown}>
              <DropDown
                label="Suất chiếu"
                state={showTime}
                list={getShowTimes(result, cinema, date)}
                dispatchType={GET_SEARCH_SHOW_TIME}
                placeHolder={
                  cinema
                    ? "Vui lòng chọn ngày xem"
                    : "Vui lòng chọn phim, rạp và ngày xem"
                }
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={2}>
            <Button
              disabled={!showTime}
              variant="contained"
              color="secondary"
              classes={{ root: styles.button }}
              onClick={() => history.push(`/booking`)}
            >
              MUA VÉ NGAY
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SearchMovie;
