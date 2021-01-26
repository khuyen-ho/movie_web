import {
  GET_ALL_CINEMA_SHOW_TIME,
  GET_MOVIE_SHOW_TIME,
  GET_ID_CINEMA_SYSTEM,
} from "./actionType";
import { showTimeService } from "../../services";
import { getCinemaSystems } from "../../helpers/schedule-cinema-manager";
import { getSystems } from "../../helpers/movie-detail-manager";

export const getAllCinemaShowTimes = () => {
  return (dispatch) => {
    showTimeService
      .fetchAllCinemaShowTimes()
      .then((res) => {
        dispatch({
          type: GET_ALL_CINEMA_SHOW_TIME,
          payload: res.data,
        });

        const systems = getCinemaSystems(res.data);
        dispatch({
          type: GET_ID_CINEMA_SYSTEM,
          payload: { id: systems[0].id, logo: systems[0].logo },
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

        const systems = getSystems(res.data);
        if (systems.length > 0) {
          dispatch({
            type: GET_ID_CINEMA_SYSTEM,
            payload: { id: systems[0].id, logo: systems[0].logo },
          });
        }
      })
      .catch((err) => console.log(err));
  };
};
