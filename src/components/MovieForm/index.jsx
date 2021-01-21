import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid } from "@material-ui/core";
import DatePicker from "../DatePicker";
import ImageUploader from "react-images-upload";
import useStyles from "./style";
import { Form, Formik } from "formik";
import AddForm from "../AddForm";
import {
  addMovie,
  chooseMovie,
  editMovie,
} from "../../redux/actions/adminAction";
import { useDispatch, useSelector } from "react-redux";
import AddMovieForm from "../AddMovieForm/index";
const MovieForm = (props) => {
  const [posters, setPosters] = useState([]);
  const userLogin = useSelector((state) => state.userLogin);
  const chosenMovie = useSelector((state) => state.changeMovie);

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

  const handleEdit = (data) => {
    console.log(data);
    dispatch(editMovie(data, userLogin.accessToken));
  };

  if (!chosenMovie) return <AddMovieForm/>;
  else
    return (
      <Formik
        onSubmit={handleEdit}
        initialValues={chosenMovie}
        render={(formikProps) => (
          <Form noValidate autoComplete="off">
            <Box className={styles.content}>
              <Typography className={styles.title} component="h1" variant="h5">
                Quản lý phim
              </Typography>

              <Grid container spacing={1}>
                <Grid item xs={12} md={4}>
                  <Box className={styles.info}>
                    <TextField
                      className={styles.input}
                      label="Mã nhóm"
                      variant="outlined"
                      type="text"
                      size="small"
                      disabled
                      defaultValue="GP00"
                    />

                    <TextField
                      className={styles.input}
                      label="Mã phim"
                      variant="outlined"
                      type="text"
                      size="small"
                      name="maPhim"
                      defaultValue={chosenMovie.maPhim}
                      //defaultValue={chosenMovie.maPhim}
                      //onChange={formikProps.handleChange}
                      disabled
                    />

                    <TextField
                      className={styles.input}
                      label="Tên phim"
                      variant="outlined"
                      type="text"
                      size="small"
                      name="tenPhim"
                      defaultValue={chosenMovie.tenPhim}
                      onChange={formikProps.handleChange}
                    />

                    <TextField
                      className={styles.input}
                      label="Bí danh"
                      variant="outlined"
                      type="text"
                      size="small"
                      name="biDanh"
                      defaultValue={chosenMovie.biDanh}
                      onChange={formikProps.handleChange}
                    />

                    <TextField
                      className={styles.input}
                      label="Trailer"
                      variant="outlined"
                      type="text"
                      size="small"
                      name="trailer"
                      defaultValue={chosenMovie.trailer}
                      onChange={formikProps.handleChange}
                    />

                    {/* <Box className={styles.datePicker}>

                  <DatePicker
                    label="Ngày khởi chiếu"
                    name="ngayKhoiChieu"
                    onChange={formikProps.handleChange}
                  />
                </Box> */}
                    <TextField
                      className={styles.input}
                      label="Ngày khởi chiếu"
                      variant="outlined"
                      type="text"
                      size="small"
                      name="ngayKhoiChieu"
                      defaultValue={chosenMovie.ngayKhoiChieu}
                      onChange={formikProps.handleChange}
                    />

                    <TextField
                      className={styles.input}
                      label="Đánh giá"
                      variant="outlined"
                      type="number"
                      InputProps={{
                        inputProps: {
                          max: 10,
                          min: 0,
                          step: 0.1,
                        },
                      }}
                      size="small"
                      name="danhGia"
                      defaultValue={chosenMovie.danhGia}
                      onChange={formikProps.handleChange}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Mô tả"
                    multiline
                    classes={{ root: `${styles.input} ${styles.desc}` }}
                    rows={22}
                    //defaultValue="Nhập mô tả..."
                    variant="outlined"
                    name="moTa"
                    defaultValue={chosenMovie.moTa}
                    onChange={formikProps.handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  {/* <ImageUploader
                className={styles.uploader}
                {...props}
                buttonText="Tải poster phim"
                label="Dung lượng file tối đa: 5MB"
                fileSizeError="Dung lượng file quá lớn"
                fileTypeError="Định dạng file không được hỗ trợ"
                withIcon={true}
                withPreview
                singleImage
                onChange={onDrop}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880}
              /> */}
                  <TextField
                    className={styles.input}
                    label="Hình ảnh"
                    variant="outlined"
                    type="text"
                    size="small"
                    name="hinhAnh"
                    defaultValue={chosenMovie.hinhAnh}
                    onChange={formikProps.handleChange}
                  />
                </Grid>
              </Grid>
            </Box>

            <Button
              variant="contained"
              color="secondary"
              className={styles.button}
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
