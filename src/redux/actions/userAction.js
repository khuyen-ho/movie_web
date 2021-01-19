import Axios from "axios";
import { Redirect } from "react-router-dom";
import { userService } from "../../services";
import {
  FETCH_CREDENTIALS,
  GET_ACCOUNT_INFO,
  REMOVE_CREDENTIALS,
} from "./actionType";

export const login = (user) => {
  return (dispatch) => {
    userService
      .signIn(user)
      .then((res) => {
        // console.log(res.data);
        dispatch({
          type: FETCH_CREDENTIALS,
          payload: res.data,
        });
        localStorage.setItem("userLogin", JSON.stringify(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const getAccountInfo = (user) => {
  return (dispatch) => {
    userService
      .fetchAccountInfo(user)
      .then((res) => {
        // console.log(res.data);
        dispatch({
          type: GET_ACCOUNT_INFO,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};
