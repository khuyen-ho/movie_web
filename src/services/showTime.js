import Axios from "axios";

class ShowTimeService {
  fetchAllCinemaShowTimes() {
    return Axios({
      method: "GET",
      url: `https://ShowTime0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP00`,
    });
  }
}

export default ShowTimeService;
