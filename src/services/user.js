import Axios from "axios";

class UserService {
  signIn(data) {
    return Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data,
    });
  }
}

export default UserService;
