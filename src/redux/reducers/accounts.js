import { FETCH_ACCOUNTS } from "../actions/actionType";

let initialState = [
  {
    taiKhoan: "123",
    hoTen: "Ngô123",
    email: "123456hehe@gmail.com",
    soDt: "0387033403",
    matKhau: "123",
    maLoaiNguoiDung: "QuanTri",
  }
];

const accounts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACCOUNTS:{
      return action.payload
    }
    default:
      return state;
  }
};

export default accounts;
