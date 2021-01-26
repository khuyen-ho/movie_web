import { adminService } from "../../services";
import { FETCH_ACCOUNTS, GET_ACCOUNT_TYPES } from "./actionType";

export const getAccounts = (keyWord) => {
  return (dispatch) => {
    adminService
      .fetchAccounts(keyWord)
      .then((res) => {
        dispatch({
          type: FETCH_ACCOUNTS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getAccountTypes = () => {
  return (dispatch) => {
    adminService
      .fetchAccountTypes()
      .then((res) => {
        dispatch({
          type: GET_ACCOUNT_TYPES,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const addUser = (data, token) => {
  return (dispatch) => {
    adminService
      .addUser(data, token)
      .then((res) => {
        alert("Thêm người dùng thành công");
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
};

export const editUser = (data, token) => {
  return (dispatch) => {
    adminService
      .editUser(data, token)
      .then((res) => {
        alert("Câp nhật người dùng thành công");
        window.location.reload(false);
      })
      .catch((err) => alert(err.response.data));
  };
};

export const deleteUser = (idUser, token) => {
  return (dispatch) => {
    adminService
      .deleteUser(idUser, token)
      .then((res) => {
        alert("Xoá người dùng thành công");
        console.log(res.data);
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
};

export const deleteMovie = (idMovie, token) => {
  return (dispatch) => {
    adminService
      .deleteMovie(idMovie, token)
      .then((res) => {
        alert("Xoá phim thành công");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data);
      });
  };
};

export const addMovie = (data, poster, token) => {
  return (dispatch) => {
    adminService
      .addMovie(data, token)
      .then((res) => {
        alert("Thêm phim thành công");
        upLoadPoster(createFormData(poster, data.tenPhim, data.maNhom));
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
};

export const editMovie = (data, poster, token) => {
  return (dispatch) => {
    adminService
      .editMovie(data, token)
      .then((res) => {
        alert("Cập nhật phim thành công");
        upLoadPoster(createFormData(poster, data.tenPhim, data.maNhom));
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
};

export const createFormData = (file, tenPhim, maNhom) => {
  let formData = new FormData();

  if (file != null) {
    formData.append("poster", file, file.name);
    formData.append("tenphim", tenPhim);
    formData.append("manhom", maNhom);
  }

  return formData;
};

export const upLoadPoster = (data) => {
  adminService
    .upLoadPoster(data)
    .then((res) => {
      alert("Upload poster thành công");
      window.location.reload(false);
    })
    .catch((err) => {
      alert(err.response.data);
    });
};

export const addShowTime = (data, token) => {
  return (dispatch) => {
    adminService
      .addShowTime(data, token)
      .then((res) => {
        alert("Thêm lịch chiếu thành công");
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
};
