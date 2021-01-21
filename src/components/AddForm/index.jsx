import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid } from "@material-ui/core";
import DatePicker from "../DatePicker";
import ImageUploader from "react-images-upload";
import useStyles from "./style";
import { Form, Formik } from "formik";
import { addMovie, chooseMovie } from "../../redux/actions/adminAction";
import { useDispatch, useSelector } from "react-redux";
import AddMovieForm from "../AddMovieForm";
const MovieForm = (props) => {
  const [posters, setPosters] = useState([]);
  const userLogin = useSelector((state) => state.userLogin);

  const styles = useStyles();
  const dispatch = useDispatch();
  const onDrop = (image) => {
    setPosters([...posters, image]);
    console.log(image);
  };
  const handleAdd = (data) => {
    console.log(data);
    dispatch(addMovie(data, userLogin.accessToken, props));
  };

  return (
    <Formik
      onSubmit={handleAdd}
      initialValues={{
        taiKhoan: "",
        hoTen: "",
        email: "",
        soDt: "",
        matKhau: "",
        maLoaiNguoiDung: "",
        changeMovie: "",
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
                // defaultValue={chosenUser.taiKhoan}
                onChange={formikProps.handleChange}
              />

              <TextField
                className={styles.input}
                label="Họ và tên"
                variant="outlined"
                type="text"
                size="small"
                name="hoTen"
                //defaultValue={chosenUser.hoTen}
                onChange={formikProps.handleChange}
              />

              {/* <Box className={styles.input} display="inline-block">
                 <DropDown label="Loại người dùng" list={["Người dùng"]} />
               </Box> */}
              <TextField
                className={styles.input}
                label="Người dùng"
                variant="outlined"
                type="text"
                size="small"
                name="maLoaiNguoiDung"
                // defaultValue={chosenUser.maLoaiNguoiDung}
                onChange={formikProps.handleChange}
              />

              <TextField
                className={styles.input}
                label="Mật khẩu"
                variant="outlined"
                type="password"
                size="small"
                name="matKhau"
                // defaultValue={chosenUser.matKhau}
                onChange={formikProps.handleChange}
              />

              <TextField
                className={styles.input}
                label="Email"
                variant="outlined"
                type="email"
                size="small"
                name="email"
                //defaultValue={chosenUser.email}
                onChange={formikProps.handleChange}
              />

              <TextField
                className={styles.input}
                label="Số điện thoại"
                variant="outlined"
                type="text"
                size="small"
                name="soDT"
                // defaultValue={chosenUser.soDt}
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
            Lưu lại
          </Button>
        </Form>
      )}
    />
  );
};

export default MovieForm;
