import { GET_ALL_CINEMA_SHOW_TIMES } from "./actionType";
import { movieService } from "../../services";

export const getAllCinemaShowTimes = () => {
  return (dispatch) => {
    movieService
      .fetchAllCinemaShowTimes()
      .then((res) => {
        dispatch({
          type: GET_ALL_CINEMA_SHOW_TIMES,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};
