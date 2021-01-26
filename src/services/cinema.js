import Axios from "axios";

class CinemaService {
  fetchCinemaSystemInfo(id) {
    const url = id
      ? `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap?maHeThongRap=${id}`
      : `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`;
    return Axios({
      method: "GET",
      url: url,
    });
  }
  fetchCinemaInfo(idCinemaSystem) {
    return Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${idCinemaSystem}`,
    });
  }
  fetchCinemaTime(idCinemaSystem) {
    return Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${idCinemaSystem}&maNhom=GP00`,
    });
  }
}

export default CinemaService;
