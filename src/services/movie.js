import Axios from "axios";
class MovieService {
  fetchMovies(keyWord) {
    const url = keyWord
      ? `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP00&tenPhim=${keyWord}`
      : `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP00`;
    return Axios({
      method: "GET",
      url: url,
    });
  }
  fetchAllMovie() {
    return Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP00`,
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
