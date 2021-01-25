import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { addUser, chooseUser, editUser } from "../../redux/actions/adminAction";
import { useFormik } from "formik";
import * as Yup from "yup";

const AccountForm = (props) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const user = useSelector((state) => state.userLogin);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP00",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Vui lòng nhập tên tài khoản"),
      hoTen: Yup.string().required("Vui lòng nhập họ và tên"),
      matKhau: Yup.string().required("Vui lòng không bỏ trống mật khẩu"),
      maLoaiNguoiDung: Yup.string().required("Vui lòng chọn loại người dùng"),
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Vui lòng nhập email"),
      soDt: Yup.string()
        .required("Vui lòng nhập số điện thoại")
        .matches(/^[0-9]*$/, "Số điện thoại không hợp lệ"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      dispatch(addUser(values, user.accessToken));
    },
  });

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <Box className={styles.content}>
        <Typography className={styles.title} component="h1" variant="h5">
          Quản lý người dùng
        </Typography>

        <Box className={styles.info}>
          <TextField
            className={styles.input}
            id="taiKhoan"
            name="taiKhoan"
            label="Tên tài khoản"
            variant="outlined"
            type="text"
            size="small"
            disabled={edit}
            value={formik.values.taiKhoan}
            onChange={formik.handleChange}
            {...(formik.errors.taiKhoan && {
              error: true,
              helperText: formik.errors.taiKhoan,
            })}
          />

          <TextField
            className={styles.input}
            id="hoTen"
            name="hoTen"
            label="Họ và tên"
            variant="outlined"
            type="text"
            size="small"
            value={formik.values.hoTen}
            onChange={formik.handleChange}
            {...(formik.errors.hoTen && {
              error: true,
              helperText: formik.errors.hoTen,
            })}
          />

          <FormControl variant="outlined" size="small" className={styles.input}>
            <InputLabel>Loại người dùng</InputLabel>
            <Select
              id="maLoaiNguoiDung"
              name="maLoaiNguoiDung"
              value={formik.values.maLoaiNguoiDung}
              classes={{
                select: styles.select,
                icon: styles.icon,
              }}
              label="Loại người dùng"
              onChange={formik.handleChange}
              {...(formik.errors.maLoaiNguoiDung && {
                error: true,
                helperText: formik.errors.maLoaiNguoiDung,
              })}
            >
              <MenuItem
                dense
                value="QuanTri"
                classes={{ root: styles.dropDownItem }}
              >
                Quản trị
              </MenuItem>
              <MenuItem
                dense
                value="KhachHang"
                classes={{ root: styles.dropDownItem }}
              >
                Khách hàng
              </MenuItem>
            </Select>
            {formik.errors.maLoaiNguoiDung ? (
              <FormHelperText>{formik.errors.maLoaiNguoiDung}</FormHelperText>
            ) : null}
          </FormControl>

          <TextField
            className={styles.input}
            id="matKhau"
            name="matKhau"
            label="Mật khẩu"
            variant="outlined"
            type="password"
            size="small"
            value={formik.values.matKhau}
            onChange={formik.handleChange}
            {...(formik.errors.matKhau && {
              error: true,
              helperText: formik.errors.matKhau,
            })}
          />

          <TextField
            className={styles.input}
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            size="small"
            value={formik.values.email}
            onChange={formik.handleChange}
            {...(formik.errors.email && {
              error: true,
              helperText: formik.errors.email,
            })}
          />

          <TextField
            className={styles.input}
            id="soDt"
            name="soDt"
            label="Số điện thoại"
            variant="outlined"
            type="text"
            size="small"
            value={formik.values.soDt}
            onChange={formik.handleChange}
            {...(formik.errors.soDt && {
              error: true,
              helperText: formik.errors.soDt,
            })}
          />
        </Box>
      </Box>

      <Button
        variant="contained"
        color="secondary"
        className={styles.button}
        type="submit"
      >
        {edit ? "Cập nhật" : "Thêm mới"}
      </Button>
    </form>
  );
};

export default AccountForm;
