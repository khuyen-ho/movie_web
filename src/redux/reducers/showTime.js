import { GET_CINEMA_TIME, SET_DATE } from "../actions/actionType";

// let initialState = [
//   {
//     movieInfo: {
//       id: 1283,
//       logo: "http://movie0706.cybersoft.edu.vn/hinhanh/trainwreck.jpg",
//       name: "Trainwreck",
//       duration: 100,
//       score: 5.2,
//     },
//     cinemaInfo: {
//       id: "bhd-star-cineplex-3-2",
//       logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
//       name: "BHD Star Cineplex - 3/2",
//       address: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
//     },
//     list: [
//       {
//         start: "2019-01-01T08:15:00",
//         duration: 100,
//       },
//       {
//         start: "2019-01-01T11:00:00",
//         duration: 100,
//       },
//       {
//         start: "2019-01-01T12:30:00",
//         duration: 100,
//       },
//       {
//         start: "2019-01-01T15:50:00",
//         duration: 100,
//       },
//       {
//         start: "2019-01-01T18:30:00",
//         duration: 100,
//       },
//     ],
//   },
//   {
//     movieInfo: {
//       id: 1284,
//       logo: "http://movie0706.cybersoft.edu.vn/hinhanh/insideout.jpg",
//       name: "Inside Out",
//       duration: 90,
//       score: 7.8,
//     },
//     cinemaInfo: {
//       id: "bhd-star-cineplex-bitexco",
//       logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
//       name: "BHD Star Cineplex - Bitexco",
//       address: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
//     },
//     list: [
//       {
//         start: "2019-01-01T02:20:00",
//         duration: 90,
//       },
//       {
//         start: "2019-01-01T11:30:00",
//         duration: 90,
//       },
//       {
//         start: "2019-01-01T17:40:00",
//         duration: 90,
//       },
//       {
//         start: "2019-01-01T21:45:00",
//         duration: 90,
//       },
//     ],
//   },
//   {
//     movieInfo: {
//       id: 1285,
//       logo: "http://movie0706.cybersoft.edu.vn/hinhanh/home.jpg",
//       name: "Home",
//       duration: 125,
//       score: 9.5,
//     },
//     cinemaInfo: {
//       id: "bhd-star-cineplex-pham-hung",
//       logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
//       name: "BHD Star Cineplex - Phạm Hùng",
//       address: "L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh",
//     },
//     list: [
//       {
//         start: "2019-01-01T09:15:00",
//         duration: 125,
//       },
//       {
//         start: "2019-01-01T12:35:00",
//         duration: 125,
//       },
//       {
//         start: "2019-01-01T17:50:00",
//         duration: 125,
//       },
//     ],
//   },
//   {
//     movieInfo: {
//       id: 1286,
//       logo: "http://movie0706.cybersoft.edu.vn/hinhanh/batmanvssuperman.jpg",
//       name: "Batman v Superman: Dawn of Justice",
//       duration: 180,
//       score: 8.3,
//     },
//     cinemaInfo: {
//       id: "bhd-star-cineplex-vincom-le-van-viet",
//       logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
//       name: "BHD Star Cineplex - Vincom Lê Văn Việt",
//       address: "L4-Vincom Plaza, 50 Lê Văn Việt, Q.9",
//     },
//     list: [
//       {
//         start: "2019-01-01T10:10:00",
//         duration: 180,
//       },
//       {
//         start: "2019-01-01T11:30:00",
//         duration: 180,
//       },
//       {
//         start: "2019-01-01T15:40:00",
//         duration: 180,
//       },
//     ],
//   },
//   {
//     movieInfo: {
//       id: 1287,
//       logo: "http://movie0706.cybersoft.edu.vn/hinhanh/antman.jpg",
//       name: "Ant-Man",
//       duration: 180,
//       score: 10.0,
//     },
//     cinemaInfo: {
//       id: "bhd-star-cineplex-vincom-quang-trung",
//       logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
//       name: "BHD Star Cineplex - Vincom Quang Trung",
//       address: "B1-Vincom QT, 190 Quang Trung, Gò Vấp",
//     },
//     list: [
//       {
//         start: "2019-01-01T12:10:00",
//         duration: 180,
//       },
//       {
//         start: "2019-01-01T20:30:00",
//         duration: 180,
//       },
//       {
//         start: "2019-01-01T21:45:00",
//         duration: 180,
//       },
//       {
//         start: "2019-01-01T22:50:00",
//         duration: 180,
//       },
//     ],
//   },
// ];

let initialState = {
  list: [
    {
      lstCumRap: [
        {
          danhSachPhim: [
            {
              lstLichChieuTheoPhim: [
                {
                  maLichChieu: 15397,
                  maRap: 454,
                  tenRap: "Rạp 4",
                  ngayChieuGioChieu: "2019-01-01T10:10:00",
                  giaVe: 75000,
                },

                {
                  maLichChieu: 15450,
                  maRap: 454,
                  tenRap: "Rạp 4",
                  ngayChieuGioChieu: "2019-01-09T20:10:00",
                  giaVe: 75000,
                },
              ],
              maPhim: 1285,
              tenPhim: "Home",
              hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/home.jpg",
            },
            {
              lstLichChieuTheoPhim: [
                {
                  maLichChieu: 15451,
                  maRap: 455,
                  tenRap: "Rạp 5",
                  ngayChieuGioChieu: "2019-01-01T10:10:00",
                  giaVe: 75000,
                },
                {
                  maLichChieu: 15504,
                  maRap: 455,
                  tenRap: "Rạp 5",
                  ngayChieuGioChieu: "2019-01-09T20:10:00",
                  giaVe: 75000,
                },
              ],
              maPhim: 1286,
              tenPhim: "Batman v Superman: Dawn of Justice",
              hinhAnh:
                "http://movie0706.cybersoft.edu.vn/hinhanh/batmanvssuperman.jpg",
            },
          ],
          maCumRap: "bhd-star-cineplex-3-2",
          tenCumRap: "BHD Star Cineplex - 3/2",
          diaChi: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
        },
        {
          danhSachPhim: [
            {
              lstLichChieuTheoPhim: [
                {
                  maLichChieu: 15775,
                  maRap: 461,
                  tenRap: "Rạp 1",
                  ngayChieuGioChieu: "2019-01-01T10:10:00",
                  giaVe: 75000,
                },
                {
                  maLichChieu: 15776,
                  maRap: 461,
                  tenRap: "Rạp 1",
                  ngayChieuGioChieu: "2019-01-01T12:10:00",
                  giaVe: 75000,
                },
              ],
              maPhim: 1292,
              tenPhim: "The Longest Ride",
              hinhAnh:
                "http://movie0706.cybersoft.edu.vn/hinhanh/thelongestride.jpg",
            },
            {
              lstLichChieuTheoPhim: [
                {
                  maLichChieu: 15829,
                  maRap: 462,
                  tenRap: "Rạp 2",
                  ngayChieuGioChieu: "2019-01-01T10:10:00",
                  giaVe: 75000,
                },
                {
                  maLichChieu: 15830,
                  maRap: 462,
                  tenRap: "Rạp 2",
                  ngayChieuGioChieu: "2019-01-01T12:10:00",
                  giaVe: 75000,
                },
              ],
              maPhim: 1293,
              tenPhim: "The Walking Dead",
              hinhAnh:
                "http://movie0706.cybersoft.edu.vn/hinhanh/thewalkingdead.jpg",
            },
          ],
          maCumRap: "bhd-star-cineplex-bitexco",
          tenCumRap: "BHD Star Cineplex - Bitexco",
          diaChi: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
        },
      ],
      maHeThongRap: "BHDStar",
      tenHeThongRap: "BHD Star Cineplex",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
      mahom: "GP00",
    },
  ],
  selected: "2019-01-01T10:10:00",
  selectedShowtimeId:15235
};

const showTimes = (state = initialState, action) => {
  switch (action.type) {
    case GET_CINEMA_TIME: {
      state.list = action.payload;
      return {...state}
    }
    case SET_DATE:
      state.selected = action.payload
      return {...state}
    default:
      return state;
  }
};

export default showTimes;
