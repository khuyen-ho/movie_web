import Axios from "axios";

class MovieService {
  fetchMovieDetail(movieTitle) {
    return Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP00&tenPhim=${movieTitle}`,
    });
  }
  fetchMovieShowTimes(movieId) {
    return Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`,
    });
  }
}

export default MovieService;
