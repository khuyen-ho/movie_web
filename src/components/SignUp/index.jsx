import React from "react";
import { Box, Typography, TextField, Button, Link } from "@material-ui/core";
import useStyles from "./style";
import { NavLink } from "react-router-dom";
import { Formik, Form } from "formik";
const SignUp = (props) => {
  const styles = useStyles();
  const handleSubmit = (user) => {
    console.log(user);
  };
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
      onSubmit={handleSubmit}
      render={(formikProps) => (
        <Form className={styles.root} noValidate autoComplete="off">
          <Box className={styles.content}>
            <Typography className={styles.title} variant="h6">
              ĐĂNG KÝ
            </Typography>

            <TextField
              className={styles.input}
              label="Họ tên"
              variant="outlined"
              type="text"
              name="hoTen"
              onChange={formikProps.handleChange}
            />

            <TextField
              className={styles.input}
              label="Tên tài khoản"
              variant="outlined"
              type="text"
              name="taiKhoan"
              onChange={formikProps.handleChange}
            />

            <TextField
              className={styles.input}
              label="Mật khẩu"
              variant="outlined"
              type="password"
              name="matKhau"
              onChange={formikProps.handleChange}
            />

            <TextField
              className={styles.input}
              label="Xác nhận mật khẩu"
              variant="outlined"
              type="password"
              name="matKhau"
              onChange={formikProps.handleChange}
            />

            <TextField
              className={styles.input}
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              onChange={formikProps.handleChange}
            />

            <TextField
              className={styles.input}
              label="Số điện thoại"
              variant="outlined"
              type="text"
              name="soDt"
              onChange={formikProps.handleChange}
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
    />
  );
};

export default SignUp;
