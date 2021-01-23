import Axios from "axios";

class MovieService {
  getMovieDetail(movieTitle) {
    //console.log('service',movieTitle);
    return Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP00&tenPhim=${movieTitle}`,
    });
  }

  getMovieDetailSchedule(movieId) {
    return Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`,
    });
  }
  fetchAllMovie() {
    return Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP00`,
    });
  }
}

export default MovieService;
