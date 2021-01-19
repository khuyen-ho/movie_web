import { GET_BOOKING_LIST } from "../actions/actionType";

let initialState = {
  thongTinPhim: {
    maLichChieu: 16099,
    tenCumRap: "BHD Star Cineplex - Bitexco",
    tenRap: "Rạp 7",
    diaChi: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
    tenPhim: "13 Reasons Why",
    hinhAnh:
      "http://movie0706.cybersoft.edu.vn/hinhanh/13-reasons-why_gp01.png",
    ngayChieu: "01/01/2019",
    gioChieu: "10:01",
  },
  danhSachGhe: [
    {
      maGhe: 49961,
      tenGhe: "01",
      maRap: 467,
      loaiGhe: "Thuong",
      stt: "01",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: "quang123",
    },
    {
      maGhe: 49962,
      tenGhe: "02",
      maRap: 467,
      loaiGhe: "Thuong",
      stt: "02",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: "123",
    },

    {
      maGhe: 50116,
      tenGhe: "156",
      maRap: 467,
      loaiGhe: "Thuong",
      stt: "156",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: "nguyendp",
    },
    {
      maGhe: 50117,
      tenGhe: "157",
      maRap: 467,
      loaiGhe: "Thuong",
      stt: "157",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: "thangtrum15",
    },
    {
      maGhe: 50118,
      tenGhe: "158",
      maRap: 467,
      loaiGhe: "Thuong",
      stt: "158",
      giaVe: 75000,
      daDat: false,
      taiKhoanNguoiDat: "123@admin",
    },
    {
      maGhe: 50119,
      tenGhe: "159",
      maRap: 467,
      loaiGhe: "Thuong",
      stt: "159",
      giaVe: 75000,
      daDat: true,
      taiKhoanNguoiDat: "123",
    },
    {
      maGhe: 50120,
      tenGhe: "160",
      maRap: 467,
      loaiGhe: "Thuong",
      stt: "160",
      giaVe: 75000,
      daDat: true,
      taiKhoanNguoiDat: "123",
    },
  ],
};

const bookingList = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKING_LIST: {
     // console.log(action.payload);
      return action.payload;
    }
    default:
      return state;
  }
};

export default bookingList;
