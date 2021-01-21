import { useSelector } from "react-redux";
import { cinemaSystemService } from "../../services";
import { GET_CINEMA_INFO, GET_CINEMA_TIME, SET_DATE } from "./actionType";

export const getCinemaInfo = (id, logo) => {
  return (dispatch) => {
    cinemaSystemService
      .fetchCinemaInfo(id)
      .then((res) => {
        dispatch({
          type: GET_CINEMA_INFO,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getCinemaTime = (id) => {
  return (dispatch) => {
    cinemaSystemService
      .fetchCinemaTime(id)
      .then((res) => {
        dispatch({
          type: GET_CINEMA_TIME,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const setCurrentTime = (date) => {
  return (dispatch) => {
    dispatch({
      type: SET_DATE,
      payload: date,
    });
  };
};
