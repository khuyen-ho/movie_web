import { GET_ALL_CINEMA_SHOW_TIME, GET_MOVIE_SHOW_TIME } from "./actionType";
import { showTimeService } from "../../services";

export const getAllCinemaShowTimes = () => {
  return (dispatch) => {
    showTimeService
      .fetchAllCinemaShowTimes()
      .then((res) => {
        dispatch({
          type: GET_ALL_CINEMA_SHOW_TIME,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getMovieShowTimes = (movieId) => {
  return (dispatch) => {
    showTimeService
      .fetchMovieShowTimes(movieId)
      .then((res) => {
        dispatch({
          type: GET_MOVIE_SHOW_TIME,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};
