import Axios from "axios";

class CinemaService {
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
