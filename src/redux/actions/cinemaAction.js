import { cinemaSystemService } from "../../services";
import {
  GET_CINEMA_INFO,
  GET_CINEMA_TIME,
  SET_DATE,
  GET_CINEMA_SYSTEM_INFO,
  GET_ADD_CINEMA_INFO,
} from "./actionType";

export const getCinemaSystemInfo = (id) => {
  return (dispatch) => {
    cinemaSystemService
      .fetchCinemaSystemInfo(id)
      .then((res) => {
        dispatch({
          type: GET_CINEMA_SYSTEM_INFO,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getCinemaInfo = (id) => {
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

export const getAddCinemaInfo = (id) => {
  return (dispatch) => {
    cinemaSystemService
      .fetchCinemaInfo(id)
      .then((res) => {
        dispatch({
          type: GET_ADD_CINEMA_INFO,
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
