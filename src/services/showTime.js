import Axios from "axios";
class ShowTimeService {
  fetchAllCinemaShowTimes() {
    return Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP00`,
    });
  }
  fetchMovieShowTimes(movieId) {
    return Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`,
    });
  }
}

export default ShowTimeService;
