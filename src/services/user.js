import Axios from "axios";
import * as yup from "yup";
export const signUpSchema = yup.object().shape({
  taiKhoan: yup.string().required("*Bắt buộc"),
  matKhau: yup.string().required("*Bắt buộc"),
  email: yup.string().required("*Bắt buộc").email("*Email không hợp lệ"),
  soDt: yup
    .string()
    .required("*Bắt buộc")
    .matches(/^[0-9]+$/, "Số điện thoại không hợp lệ"),

  hoTen: yup.string().required("*Bắt buộc"),
});
class UserService {
  signIn(data) {
    return Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data,
    });
  }
  signUp(data) {
    return Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data,
    });
  }
  fetchAccountInfo(token, data) {
    return Axios({
      method: "POST",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default UserService;
