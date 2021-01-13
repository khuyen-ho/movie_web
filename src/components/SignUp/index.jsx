import React from "react";
import { Box, Typography, TextField, Button, Link } from "@material-ui/core";
import useStyles from "./style";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const signUpSchema = yup.object().shape({
  taiKhoan: yup.string().required("*Bắt buộc"),
  matKhau: yup.string().required("*Bắt buộc"),
  email: yup.string().required("*Bắt buộc").email("*Email không hợp lệ"),
  soDt: yup
    .string()
    .required("*Bắt buộc")
    .matches(/^[0-9]+$/, "Số điện thoại không hợp lệ"),

  hoTen: yup.string().required("*Bắt buộc"),
});

const SignUp = (props) => {
  const styles = useStyles();
  const handleSubmit = (user) => {};
  return (
    <Formik
      initialValues={{
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP00",
        maLoaiNguoiDung: "KhachHang",
        hoTen: "",
      }}
      validationSchema={signUpSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, handleChange }) => (
        <Form className={styles.root} noValidate autoComplete="off">
          <Box className={styles.content}>
            <Typography className={styles.title} variant="h6">
              ĐĂNG KÝ
            </Typography>
            <Box
              style={{
                color: "white",
                textAlign: "left",
                fontSize: 10,
              }}
            >
              <ErrorMessage name="taiKhoan" />
            </Box>
            <TextField
              className={styles.input}
              label="Họ tên"
              variant="outlined"
              type="text"
              name="hoTen"
              onChange={handleChange}
            />
            <Box
              style={{
                color: "white",
                textAlign: "left",
                fontSize: 10,
              }}
            >
              <ErrorMessage name="taiKhoan" />
            </Box>
            <TextField
              className={styles.input}
              label="Tên tài khoản"
              variant="outlined"
              type="text"
              name="taiKhoan"
              onChange={handleChange}
            />
            <Box
              style={{
                color: "white",
                textAlign: "left",
                fontSize: 10,
              }}
            >
              <ErrorMessage name="matKhau" />
            </Box>
            <TextField
              className={styles.input}
              label="Mật khẩu"
              variant="outlined"
              type="password"
              name="matKhau"
              onChange={handleChange}
            />
            {/* <TextField
              className={styles.input}
              label="Xác nhận mật khẩu"
              variant="outlined"
              type="password"
              name="xacNhanMatKhau"
              onChange={e=>console.log(e.target.value)}
            />
            <Box
              style={{
                color: "white",
                textAlign: "left",
                fontSize: 10,
                marginBottom: 10,
              }}
            >
              {errors.xacNhanMatKhau && touched.xacNhanMatKhau ? (
                <div>{errors.xacNhanMatKhau}</div>
              ) : null}
            
            </Box> */}
            <Box
              style={{
                color: "white",
                textAlign: "left",
                fontSize: 10,
              }}
            >
              <ErrorMessage name="email" />
            </Box>{" "}
            <TextField
              className={styles.input}
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              onChange={handleChange}
            />
            <Box
              style={{
                color: "white",
                textAlign: "left",
                fontSize: 10,
              }}
            >
              <ErrorMessage name="soDt" />
            </Box>
            <TextField
              className={styles.input}
              label="Số điện thoại"
              variant="outlined"
              type="text"
              name="soDt"
              onChange={handleChange}
            />
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              className={styles.button}
              type="submit"
            >
              ĐĂNG KÝ
            </Button>
            <Typography component="span" className={styles.label}>
              {`Đã có tài khoản? `}
              <NavLink to="signin">
                <Link
                  href="#"
                  className={`${styles.label} ${styles.link}`}
                  variant="subtitle1"
                >
                  Đăng nhập
                </Link>
              </NavLink>
            </Typography>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
