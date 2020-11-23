import React from "react";

//lấy thông tin lịch chiếu trong rạp
const defaultList = [
  {
    lstCumRap: [
      {
        danhSachPhim: [
          {
            lstLichChieuTheoPhim: [
              {
                maLichChieu: 15612,
                maRap: 457,
                tenRap: "Rạp 7",
                ngayChieuGioChieu: "2019-01-09T20:10:00",
                giaVe: 75000,
              },
            ],
            maPhim: 1288,
            tenPhim: "Jurassic World",
            hinhAnh:
              "http://movie0706.cybersoft.edu.vn/hinhanh/jurassicworld.jpg",
          },
          {
            lstLichChieuTheoPhim: [
              {
                maLichChieu: 15666,
                maRap: 458,
                tenRap: "Rạp 8",
                ngayChieuGioChieu: "2019-01-09T20:10:00",
                giaVe: 75000,
              },
            ],
            maPhim: 1289,
            tenPhim: "Fantastic Four",
            hinhAnh:
              "http://movie0706.cybersoft.edu.vn/hinhanh/fantasticfour.jpg",
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
                maLichChieu: 15828,
                maRap: 461,
                tenRap: "Rạp 1",
                ngayChieuGioChieu: "2019-01-09T20:10:00",
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
                maLichChieu: 16098,
                maRap: 466,
                tenRap: "Rạp 6",
                ngayChieuGioChieu: "2019-01-09T20:10:00",
                giaVe: 75000,
              },
            ],
            maPhim: 1297,
            tenPhim: "Avengers: Infinity War ",
            hinhAnh:
              "http://movie0706.cybersoft.edu.vn/hinhanh/avengers-infinity-war.jpg",
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
];


//lấy mã phim -> có mã phim gọi api quản lý phim -> lấy thông tin phim

const getIdMovie = (defaultList)=>{
idMovie = []
defaultList[0].lstCumRap.map(cinema=>{
    cinema.danhSachPhim
})

return idMovie
}

const ShowTimeList = (props) => {
   
return <div>{
    }</div>;
};

export default ShowTimeList;
