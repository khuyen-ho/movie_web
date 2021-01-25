import {
  FETCH_ACCOUNTS,
  GET_EDIT_STATUS,
  GET_EDITED_ACCOUNT,
  GET_KEYWORD_ACCOUNT,
} from "../actions/actionType";

let initialState = {
  list: [],
  isEdited: false,
  edited: {
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "",
    maLoaiNguoiDung: "",
    hoTen: "",
  },
  keyWord: "",
};

const accounts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACCOUNTS: {
      state.list = action.payload;
      return { ...state };
    }
    case GET_EDIT_STATUS: {
      state.isEdited = action.payload;
      return { ...state };
    }
    case GET_EDITED_ACCOUNT: {
      state.edited = action.payload;
      return { ...state };
    }
    case GET_KEYWORD_ACCOUNT: {
      state.keyWord = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default accounts;
