import Axios from "axios";

class AccountService {
  fetchAccounts() {
    return Axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00
      `,
    });
  }
  addUser(data, token) {
    return Axios({
      method: "POST",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  deleteUser(idUser, token) {
    return Axios({
      method: "DELETE",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${idUser}
      `,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  editUser(data, token) {
    return Axios({
      method: "PUT",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
export default AccountService;
