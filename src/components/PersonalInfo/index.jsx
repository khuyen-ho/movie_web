import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Collapse,
  Button,
} from "@material-ui/core";
// import { UPDATE_ACCOUNT_INFO } from "../actions/actionType";
// import useForm from "./useForm";
import useStyles from "./style";
// import { userService } from "../../services";
// import { getAccountInfo } from "../../redux/actions/userAction";
import { Form, Formik } from "formik";
import { chooseUser, editUser } from "../../redux/actions/adminAction";
import { getAccountInfo } from "../../redux/actions/userAction";
const PersonalInfo = (props) => {
  const [changePass, setChangePass] = useState(false);
  // const [oldPass, setOldPass] = useState("");
  // const [oldPassError, setOldPassError] = useState(false);
  // const [newPass, setNewPass] = useState("");
  // const [confirmPass, setConfirmPass] = useState("");
  // const [confirmPassError, setConfirmPassError] = useState(false);

  const styles = useStyles();
  const userLogin = useSelector((state) => state.userLogin);
  const account = useSelector((state) => state.account);
  //Truyền vào biến data để lưu dữ liệu khi gọi api
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAccountInfo(userLogin, { taiKhoan: userLogin.taiKhoan }));
    // dispatch(
    //   chooseUser({
    //     taiKhoan: userLogin.taiKhoan,
    //     matKhau: account.matKhau,
    //     email: userLogin.email,
    //     soDt: userLogin.soDT,
    //     maNhom: userLogin.maNhom,
    //     maLoaiNguoiDung: userLogin.maLoaiNguoiDung,
    //     hoTen: userLogin.hoTen,
    //   })
    // );
  }, []);

  //const chosenUser = useSelector((state) => state.changeUser);

  // const validate = (fieldValues = values) => {
  //   let temp = { ...errors };
  //   if ("taiKhoan" in fieldValues) {
  //     temp.taiKhoan = fieldValues.taiKhoan ? "" : "Vui lòng nhập tên tài khoản";
  //   }
  //   if ("hoTen" in fieldValues) {
  //     temp.hoTen = fieldValues.hoTen ? "" : "Vui lòng nhập họ tên";
  //   }
  //   if ("email" in fieldValues) {
  //     temp.email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
  //       fieldValues.email
  //     )
  //       ? ""
  //       : "Email không hợp lệ";
  //   }
  //   if ("soDT" in fieldValues) {
  //     temp.soDT =
  //       fieldValues.soDT.length === 10 ? "" : "Số điện thoại cần 10 chữ số";
  //   }

  //   setErrors({ ...temp });

  //   if (fieldValues === values) {
  //     return Object.values(temp).every((x) => x === "");
  //   }
  // };

  // const checkPass = () => {
  //   return (
  //     changePass &&
  //     setOldPassError(oldPass !== values.matKhau) &&
  //     setConfirmPassError(newPass !== confirmPass)
  //   );
  // };

  // const handleOldPass = (event) => {
  //   setOldPass(event.target.value);
  // };

  // const handleNewPass = (event) => {
  //   setNewPass(event.target.value);
  // };

  // const handleConfirmPass = (event) => {
  //   setConfirmPass(event.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate() && checkPass()) {
  //     alert("pass");
  //   }
  // };

  // const { values, errors, setErrors } = useForm(
  //   account,
  //   true,
  //   validate
  // );
  // console.log(values);

  // const userLogin = useSelector((state) => state.userLogin);
  // useEffect(() => {
  //   dispatch(editUser(data, userLogin.accessToken));
  // }, []);
  const handleEdit = (data) => {
    console.log(data);
    dispatch(editUser(data, userLogin.accessToken));
  };

  return (
    <>
      <Formik
        onSubmit={handleEdit}
        initialValues={{
          taiKhoan: userLogin.taiKhoan,
          matKhau: userLogin.matKhau,
          email: userLogin.email,
          soDt: userLogin.soDT,
          maNhom: userLogin.maNhom,
          maLoaiNguoiDung: userLogin.maLoaiNguoiDung,
          hoTen: userLogin.hoTen,
        }}
        render={(formikProps) => (
          <Form noValidate autoComplete="off">
            <Box className={styles.content}>
              <Typography className={styles.title} component="h1" variant="h5">
                Thông tin cá nhân
              </Typography>

              <Box className={styles.info}>
                <TextField
                  className={styles.input}
                  name="taiKhoan"
                  label="Tên tài khoản"
                  variant="outlined"
                  type="text"
                  size="small"
                  defaultValue={userLogin.taiKhoan}
                  name="taiKhoan"
                  disabled
                  onChange={formikProps.handleChange}
                  // {...(errors.taiKhoan && {
                  //   error: true,
                  //   helperText: errors.taiKhoan,
                  // })}
                />

                <TextField
                  className={styles.input}
                  name="hoTen"
                  label="Họ và tên"
                  variant="outlined"
                  type="text"
                  size="small"
                  defaultValue={userLogin.hoTen}
                  name="hoTen"
                  onChange={formikProps.handleChange}
                  // {...(errors.hoTen && {
                  //   error: true,
                  //   helperText: errors.hoTen,
                  // })}
                />

                <TextField
                  className={styles.input}
                  name="email"
                  label="Email"
                  variant="outlined"
                  type="email"
                  size="small"
                  defaultValue={userLogin.email}
                  name="email"
                  onChange={formikProps.handleChange}
                  // {...(errors.email && {
                  //   error: true,
                  //   helperText: errors.email,
                  // })}
                />

                <TextField
                  className={styles.input}
                  name="soDT"
                  label="Số điện thoại"
                  variant="outlined"
                  type="text"
                  size="small"
                  defaultValue={userLogin.soDT}
                  name="soDt"
                  onChange={formikProps.handleChange}
                  // {...(errors.soDT && {
                  //   error: true,
                  //   helperText: errors.soDT,
                  // })}
                />
              </Box>

              <FormControlLabel
                classes={{ root: styles.checkbox, label: styles.label }}
                control={
                  <Checkbox
                    checked={changePass}
                    onChange={() => setChangePass(!changePass)}
                    name="changePass"
                  />
                }
                label="Đổi mật khẩu"
              />

              <Collapse in={changePass} timeout="auto">
                <Box className={styles.content}>
                  <TextField
                    className={styles.input}
                    label="Mật khẩu hiện tại"
                    variant="outlined"
                    type="password"
                    size="small"
                    //value={oldPass}
                    defaultValue={account.matKhau}
                    name="matKhau"
                    onChange={formikProps.handleChange}
                    // {...(oldPassError && {
                    //   error: true,
                    //   helperText: "Sai mật khẩu hiện tại",
                    // })}
                  />
                  {/* <TextField
                    className={styles.input}
                    label="Mật khẩu mới"
                    variant="outlined"
                    type="password"
                    size="small"
                    name="matKhau"
                    onChange={formikProps.handleChange}
                    //value={newPass}
                    //onChange={handleNewPass}
                  />
                  <TextField
                    className={styles.input}
                    label="Xác nhận mật khẩu"
                    variant="outlined"
                    type="password"
                    size="small"
                    value={confirmPass}
                    onChange={handleConfirmPass}
                    {...(confirmPassError && {
                      error: true,
                      helperText: "Mật khẩu xác nhận không khớp",
                    })}
                  /> */}
                </Box>
              </Collapse>
            </Box>

            <Button
              variant="contained"
              color="secondary"
              className={styles.button}
              //onClick={handleSubmit}
              type="submit"
            >
              LƯU LẠI
            </Button>
          </Form>
        )}
      />
    </>
  );
};

export default PersonalInfo;
