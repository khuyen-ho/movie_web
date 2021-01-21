// import React from "react";
// import { Button, Container, Grid, Box } from "@material-ui/core";
// import useStyle from "./style";
// import DropDown from "../DropDown";

// const SearchMovie = (props) => {
//   const movieList = [
//     "Chọn phim",
//     "Phim 1",
//     "Phim 2",
//     "Phim 3",
//     "Phim 4",
//     "Phim 5",
//   ];
//   const cinemaList = ["Chọn rạp", "Rạp 1", "Rạp 2", "Rạp 3", "Rạp 4"];
//   const dateList = ["Chọn ngày xem", "Ngày 1", "Ngày 2", "Ngày 3", "Ngày 4"];
//   const showTimeList = ["Chọn suất", "Suất 1", "Suất 2", "Suất 3", "Suất 4"];

//   const styles = useStyle();

//   return (
//     <Container maxWidth="lg">
//       <Box className={styles.root}>
//         <Grid container spacing={1}>
//           <Grid item xs={12} lg={4}>
//             <DropDown list={movieList} />
//           </Grid>
//           <Grid item xs={12} lg={2}>
//             <DropDown list={cinemaList} />
//           </Grid>
//           <Grid item xs={12} lg={2}>
//             <DropDown list={dateList} />
//           </Grid>
//           <Grid item xs={12} lg={2}>
//             <DropDown list={showTimeList} />
//           </Grid>
//           <Grid item xs={12} lg={2}>
//             <Button
//               variant="contained"
//               color="secondary"
//               classes={{ root: styles.button }}
//             >
//               MUA VÉ NGAY
//             </Button>
//           </Grid>
//         </Grid>
//       </Box>
//     </Container>
//   );
// };

// export default SearchMovie;
import React, { useEffect } from "react";
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
  RESET_STORE,
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
  const movies = useSelector((state) => state.movies_);
  const movieNames = useSelector((state) => state.movies_).map(
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

  const reset = () => {
    dispatch({
      type: RESET_STORE,
    });
  };

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
              onClick={() => window.open("/booking", "_blank")}
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
