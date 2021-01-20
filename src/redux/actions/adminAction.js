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

export const addUser = (data, token) => {
  return (dispatch) => {
    accountService
      .addUser(data, token)
      .then((res) => {
        alert("Thêm người dùng thành công")
         console.log(res.data);
        // dispatch({
        //   type: FETCH_ACCOUNTS,
        //   payload: res.data,
        // });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteUser = (idUser, token) => {
  return (dispatch) => {
    accountService
      .deleteUser(idUser, token)
      .then((res) => {
        alert("Xoá người dùng thành công")
         console.log(res.data);
        // dispatch({
        //   type: FETCH_ACCOUNTS,
        //   payload: res.data,
        // });
      })
      .catch((err) => console.log(err));
  };
};

export const editUser = (data, token) => {
  return (dispatch) => {
    accountService
      .editUser(data, token)
      .then((res) => {
        alert("Chỉnh sửa người dùng thành công")
         console.log(res.data);
        // dispatch({
        //   type: FETCH_ACCOUNTS,
        //   payload: res.data,
        // });
      })
      .catch((err) => console.log(err));
  };
};