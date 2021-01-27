import React from "react";
import { Box, Typography, TextField, Button, Link } from "@material-ui/core";
import useStyles from "./style";
import { NavLink, Redirect } from "react-router-dom";
import { Formik, Form } from "formik";
import { login } from "../../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const SignIn = ({ props }) => {
  const styles = useStyles();
  const userLogin = useSelector((state) => state.userLogin);

  let dispatch = useDispatch();
  const handleSubmit = (user) => {
    dispatch(login(user));
  };
  if (!userLogin) {
    return (
      <Formik
        initialValues={{
          taiKhoan: "",
          matKhau: "",
        }}
        onSubmit={handleSubmit}
        render={(formikProps) => (
          <Form className={styles.root} noValidate autoComplete="off">
            <Box className={styles.content}>
              <Typography className={styles.title} variant="h6">
                ĐĂNG NHẬP
              </Typography>

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

              <Button
                variant="contained"
                color="secondary"
                fullWidth
                className={styles.button}
                type="submit"
              >
                ĐĂNG NHẬP
              </Button>

              <Box className={styles.bottomGroup}>
                <NavLink to="/signup">
                  <Link
                    href="#"
                    className={`${styles.label} ${styles.link}`}
                    variant="subtitle1"
                  >
                    Đăng ký tài khoản
                  </Link>
                </NavLink>
              </Box>
            </Box>
          </Form>
        )}
      />
    );
  } else {
    return <Redirect to="/Home" />;
  }
};

export default SignIn;
