import React from "react";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import DropDown from "../DropDown";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/actions/adminAction";
import { Form, Formik } from "formik";
const AccountForm = (props) => {
  const styles = useStyles();
  const userLogin = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const handleClick = (data) => {
    //console.log(data);
    dispatch(addUser(data, userLogin.accessToken));
  };
  return (
    <>
      <Formik
        onSubmit={handleClick}
        initialValues={{
          taiKhoan: "",
          matKhau: "",
          email: "",
          soDt: "",
          maNhom: "GP00",
          maLoaiNguoiDung: "KhachHang",
          hoTen: "",
        }}
        render={(formikProps) => (
          <Form noValidate autoComplete="off">
            <Box className={styles.content}>
              <Typography className={styles.title} component="h1" variant="h5">
                Quản lý người dùng
              </Typography>

              <Box className={styles.info}>
                <TextField
                  className={styles.input}
                  label="Tên tài khoản"
                  variant="outlined"
                  type="text"
                  size="small"
                  name="taiKhoan"
                  onChange={formikProps.handleChange}
                />

                <TextField
                  className={styles.input}
                  label="Họ và tên"
                  variant="outlined"
                  type="text"
                  size="small"
                  name="hoTen"
                  onChange={formikProps.handleChange}
                />

                <Box className={styles.input} display="inline-block">
                  <DropDown label="Loại người dùng" list={["Người dùng"]} />
                </Box>

                <TextField
                  className={styles.input}
                  label="Mật khẩu"
                  variant="outlined"
                  type="password"
                  size="small"
                  name="matKhau"
                  onChange={formikProps.handleChange}
                />

                <TextField
                  className={styles.input}
                  label="Email"
                  variant="outlined"
                  type="email"
                  size="small"
                  name="email"
                  onChange={formikProps.handleChange}
                />

                <TextField
                  className={styles.input}
                  label="Số điện thoại"
                  variant="outlined"
                  type="text"
                  size="small"
                  name="soDT"
                  onChange={formikProps.handleChange}
                />
              </Box>
            </Box>

            <Button
              variant="contained"
              color="secondary"
              className={styles.button}
              // onClick={handleClick}
              type="submit"
            >
              Thêm
            </Button>
          </Form>
        )}
      />
    </>
  );
};

export default AccountForm;
