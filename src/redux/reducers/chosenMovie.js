import { GET_ID_CINEMA_SYSTEM, GET_MOVIE_DETAIL, GET_MOVIE_DETAIL_SCHEDULE } from "../actions/actionType";

let initialState = {
  heThongRapChieu: [
    {
      cumRapChieu: [
        {
          lichChieuPhim: [
            {
              maLichChieu: "16099",
              maRap: "467",
              tenRap: "Rạp 7",
              ngayChieuGioChieu: "2019-01-01T10:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "40853",
              maRap: "464",
              tenRap: "Rạp 4",
              ngayChieuGioChieu: "2020-12-19T03:15:00",
              giaVe: 120000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "40854",
              maRap: "464",
              tenRap: "Rạp 4",
              ngayChieuGioChieu: "2020-12-20T03:20:00",
              giaVe: 80000,
              thoiLuong: 120,
            },
          ],
          maCumRap: "bhd-star-cineplex-bitexco",
          tenCumRap: "BHD Star Cineplex - Bitexco",
          hinhAnh: null,
        },
        {
          lichChieuPhim: [
            {
              maLichChieu: "40540",
              maRap: "451",
              tenRap: "Rạp 1",
              ngayChieuGioChieu: "2020-10-13T01:56:49",
              giaVe: 80000,
              thoiLuong: 120,
            },

            {
              maLichChieu: "41501",
              maRap: "454",
              tenRap: "Rạp 4",
              ngayChieuGioChieu: "2021-01-15T16:22:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
          ],
          maCumRap: "bhd-star-cineplex-3-2",
          tenCumRap: "BHD Star Cineplex - 3/2",
          hinhAnh: null,
        },
      ],
      maHeThongRap: "BHDStar",
      tenHeThongRap: "BHD Star Cineplex",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
    },
    {
      cumRapChieu: [
        {
          lichChieuPhim: [
            {
              maLichChieu: "41516",
              maRap: "511",
              tenRap: "Rạp 1",
              ngayChieuGioChieu: "2021-01-16T07:36:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
          ],
          maCumRap: "cgv-aeon-binh-tan",
          tenCumRap: "CGV - Aeon Bình Tân",
          hinhAnh: null,
        }
      ],
      maHeThongRap: "CGV",
      tenHeThongRap: "cgv",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png",
    },
    {
      cumRapChieu: [
        {
          lichChieuPhim: [
            {
              maLichChieu: "29917",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-01T10:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "29918",
              maRap: "723",
              tenRap: "Rạp 3",
              ngayChieuGioChieu: "2019-01-01T12:10:00",
              giaVe: 75000,
              thoiLuong: 120,
            },
          ],
          maCumRap: "cns-hai-ba-trung",
          tenCumRap: "CNS - Hai Bà Trưng",
          hinhAnh: null,
        },
        {
          lichChieuPhim: [
            {
              maLichChieu: "40292",
              maRap: "739",
              tenRap: "Rạp 9",
              ngayChieuGioChieu: "2020-04-24T02:18:00",
              giaVe: 100000,
              thoiLuong: 120,
            },
            {
              maLichChieu: "40850",
              maRap: "734",
              tenRap: "Rạp 4",
              ngayChieuGioChieu: "2020-12-18T03:00:00",
              giaVe: 120000,
              thoiLuong: 120,
            },
          ],
          maCumRap: "cns-quoc-thanh",
          tenCumRap: "CNS - Quốc Thanh",
          hinhAnh: null,
        },
      ],
      maHeThongRap: "CineStar",
      tenHeThongRap: "CineStar",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png",
    },
  ],
  maPhim: 1314,
  tenPhim: "13 Reasons Why",
  biDanh: "13-reasons-why",
  trailer: "https://www.youtube.com/embed/1HpZevFifuo",
  hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/13-reasons-why_gp01.png",
  moTa:
    "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.fxcbcvxbxc",
  maNhom: "GP00",
  ngayKhoiChieu: "2021-01-17T10:11:48.953",
  danhGia: 10,
};

const chosenMovie = (state = initialState, action) => {
  switch (action.type) {
  case GET_MOVIE_DETAIL_SCHEDULE:{
    console.log(action.payload);
    return action.payload
  }
    default:
      return state;
  }
};

export default chosenMovie;
