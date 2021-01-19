import Axios from "axios";
import { accountService } from "../../services";
import { FETCH_ACCOUNTS } from "./actionType";

export const getAccounts = () => {
  return (dispatch) => {
    accountService
      .fetchAccounts()
      .then((res) => {
        // console.log(res.data);
        dispatch({
          type: FETCH_ACCOUNTS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};
