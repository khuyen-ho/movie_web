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
  fetchCinemaInfo(systemId) {
    return Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${systemId}`,
    });
  }
  fetchCinemaTime(systemId) {
    return Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${systemId}&maNhom=GP00`,
    });
  }
}

export default CinemaService;
