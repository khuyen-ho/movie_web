import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import useStyles from "./style";
import { useFormik } from "formik";
import * as Yup from "yup";
import { editUser } from "../../redux/actions/adminAction";

const PersonalInfo = (props) => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const user = useSelector((state) => state.userLogin);
  const account = useSelector((state) => state.userAccount);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: account.taiKhoan,
      matKhau: account.matKhau,
      email: account.email,
      soDt: account.soDT,
      maNhom: account.maNhom,
      maLoaiNguoiDung: user.maLoaiNguoiDung,
      hoTen: account.hoTen,
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Vui lòng nhập tên tài khoản"),
      hoTen: Yup.string().required("Vui lòng nhập họ và tên"),
      matKhau: Yup.string().required("Vui lòng không bỏ trống mật khẩu"),
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Vui lòng nhập email"),
      soDt: Yup.string()
        .required("Vui lòng nhập số điện thoại")
        .matches(/^[0-9]*$/, "Số điện thoại không hợp lệ"),
    }),
    onSubmit: (values) => {
      dispatch(editUser(values, user.accessToken));
    },
  });

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <Box className={styles.content}>
        <Typography className={styles.title} component="h1" variant="h5">
          Thông tin cá nhân
        </Typography>

        <Box className={styles.info}>
          <TextField
            className={styles.input}
            id="taiKhoan"
            name="taiKhoan"
            label="Tên tài khoản"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            type="text"
            size="small"
            disabled
            value={formik.values.taiKhoan}
            onChange={formik.handleChange}
          />

          <TextField
            className={styles.input}
            id="hoTen"
            name="hoTen"
            label="Họ và tên"
            InputLabelProps={{
              shrink: true,
            }}
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

          <TextField
            className={styles.input}
            id="email"
            name="email"
            label="Email"
            InputLabelProps={{
              shrink: true,
            }}
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
            InputLabelProps={{
              shrink: true,
            }}
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

        <TextField
          className={styles.input}
          id="matKhau"
          name="matKhau"
          label="Mật khẩu"
          InputLabelProps={{
            shrink: true,
          }}
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
      </Box>

      <Button
        variant="contained"
        color="secondary"
        className={styles.button}
        type="submit"
      >
        LƯU LẠI
      </Button>
    </form>
  );
};

export default PersonalInfo;
