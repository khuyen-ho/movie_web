// export default SignUp;
import React from "react";
import { Box, Typography, TextField, Button, Link } from "@material-ui/core";
import useStyles from "./style";
import { Formik, Form, ErrorMessage } from "formik";
import { signUpSchema } from "../../services/user";
import { userService } from "../../services";
import { useDispatch } from "react-redux";

const SignUp = (props) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const handleSubmit = (user) => {
    dispatch(
      userService
        .signUp(user)
        .then((res) => {
          //console.log(res);
          alert("Đăng kí thành công");
          props.history.replace("signin");
        })
        .catch((err) => {
          console.log(err.response.data);
          alert(err.response.data);
        })
    );
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
              <Link
                href="/signin"
                className={`${styles.label} ${styles.link}`}
                variant="subtitle1"
              >
                Đăng nhập
              </Link>
            </Typography>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
