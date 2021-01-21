let initialState = [
    {
      lstCumRap: [
        {
          danhSachPhim: [
            {
              lstLichChieuTheoPhim: [
                {
                  maLichChieu: 15286,
                  maRap: "451",
                  tenRap: "Rạp 1",
                  ngayChieuGioChieu: "2019-01-09T16:10:00",
                  giaVe: 75000,
                },
                {
                  maLichChieu: 15287,
                  maRap: "451",
                  tenRap: "Rạp 1",
                  ngayChieuGioChieu: "2019-01-09T18:10:00",
                  giaVe: 75000,
                },
              ],
              maPhim: 1282,
              tenPhim: "Ted 2",
              hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/ted2.jpg",
            },
            {
              lstLichChieuTheoPhim: [
                {
                  maLichChieu: 15783,
                  maRap: "461",
                  tenRap: "Rạp 1",
                  ngayChieuGioChieu: "2019-01-02T14:10:00",
                  giaVe: 75000,
                },
                {
                  maLichChieu: 15784,
                  maRap: "461",
                  tenRap: "Rạp 1",
                  ngayChieuGioChieu: "2019-01-02T16:10:00",
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
                  maLichChieu: 15881,
                  maRap: "462",
                  tenRap: "Rạp 2",
                  ngayChieuGioChieu: "2019-01-09T18:10:00",
                  giaVe: 75000,
                },
                {
                  maLichChieu: 15882,
                  maRap: "462",
                  tenRap: "Rạp 2",
                  ngayChieuGioChieu: "2019-01-09T20:10:00",
                  giaVe: 75000,
                },
              ],
              maPhim: 1293,
              tenPhim: "The Walking Dead",
              hinhAnh:
                "http://movie0706.cybersoft.edu.vn/hinhanh/thewalkingdead.jpg",
            },
            {
              lstLichChieuTheoPhim: [
                {
                  maLichChieu: 15935,
                  maRap: "463",
                  tenRap: "Rạp 3",
                  ngayChieuGioChieu: "2019-01-09T18:10:00",
                  giaVe: 75000,
                },
                {
                  maLichChieu: 15936,
                  maRap: "463",
                  tenRap: "Rạp 3",
                  ngayChieuGioChieu: "2019-01-09T20:10:00",
                  giaVe: 75000,
                },
              ],
              maPhim: 1294,
              tenPhim: "Southpaw",
              hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/southpaw.jpg",
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
  
  const showTimes = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default showTimes;
  