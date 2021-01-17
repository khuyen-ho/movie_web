import Axios from "axios";
import { Redirect } from "react-router-dom";
import { userService } from "../../services";
import { FETCH_CREDENTIALS, REMOVE_CREDENTIALS } from "./actionType";

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

