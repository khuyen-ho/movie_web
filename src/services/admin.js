import Axios from "axios";

class AccountService {
  fetchAccounts() {
    return Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01
      `,
    });
  }
}

export default AccountService;
