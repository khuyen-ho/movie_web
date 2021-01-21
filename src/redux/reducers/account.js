import { GET_ACCOUNT_INFO, UPDATE_ACCOUNT_INFO } from "../actions/actionType";

let initialState = {
  taiKhoan: "string",
  matKhau: "string",
  hoTen: "string",
  email: "string1@gmail.com",
  soDT: "0922222222",
  maNhom: "gp01",
  loaiNguoiDung: null,
  thongTinDatVe: [
    {
      danhSachGhe: [
        {
          maHeThongRap: "BHDStar",
          tenHeThongRap: "BHD Star Cineplex - Vincom Lê Văn Việt",
          maCumRap: "Rạp 7",
          tenCumRap: "Rạp 7",
          maRap: 487,
          tenRap: "Rạp 7",
          maGhe: 53320,
          tenGhe: "160",
        },
      ],
      maVe: 44092,
      ngayDat: "2021-01-03T18:41:25.653",
      tenPhim: "Trainwreck",
      giaVe: 75000,
      thoiLuongPhim: 120,
    },
    {
      danhSachGhe: [
        {
          maHeThongRap: "BHDStar",
          tenHeThongRap: "BHD Star Cineplex - Phạm Hùng",
          maCumRap: "Rạp 2",
          tenCumRap: "Rạp 2",
          maRap: 472,
          tenRap: "Rạp 2",
          maGhe: 50864,
          tenGhe: "104",
        },
      ],
      maVe: 44105,
      ngayDat: "2021-01-03T21:43:11.907",
      tenPhim: "Ted 5",
      giaVe: 90000,
      thoiLuongPhim: 120,
    },
  ],
};

const account = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCOUNT_INFO: {
      state = action.payload;
      return { ...state };
    }
    case UPDATE_ACCOUNT_INFO: {
      state.taiKhoan = action.payload.taiKhoan;
      state.hoten = action.payload.hoten;
      state.email = action.payload.hoten;
      state.soDT = action.payload.soDT;
      return [...state];
    }
    default:
      return state;
  }
};

export default account;
