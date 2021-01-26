import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  FormHelperText,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import ImageUploader from "react-images-upload";
import useStyles from "./style";
import { addMovie, editMovie } from "../../redux/actions/adminAction";
import { getFullDate } from "../../helpers/time-manager";
import { GET_POSTER } from "../../redux/actions/actionType";
import { useFormik } from "formik";
import * as Yup from "yup";

const MovieForm = (props) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userLogin);
  const isEdited = useSelector((state) => state.movies.isEdited);
  const editedMovie = useSelector((state) => state.movies.edited);
  const poster = useSelector((state) => state.movies.poster);

  const onDrop = (image) => {
    dispatch({ type: GET_POSTER, payload: image[0] });
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: editedMovie.maPhim,
      tenPhim: editedMovie.tenPhim,
      biDanh: editedMovie.biDanh,
      trailer: editedMovie.trailer,
      hinhAnh: editedMovie.hinhAnh,
      moTa: editedMovie.moTa,
      maNhom: editedMovie.maNhom,
      ngayKhoiChieu: editedMovie.ngayKhoiChieu,
      danhGia: editedMovie.danhGia,
    },
    validationSchema: Yup.object({
      maPhim: Yup.string()
        .required("Vui lòng nhập mã phim")
        .matches(/^[0-9]*$/, "Vui lòng chỉ nhập số"),
      tenPhim: Yup.string().required("Vui lòng nhập tên phim"),
      biDanh: Yup.string().required("Vui lòng nhập bí danh"),
      trailer: Yup.string().required("Vui lòng nhập link trailer"),
      moTa: Yup.string().required("Vui lòng nhập mô tả"),
      maNhom: Yup.string().required("Vui lòng nhập mã nhóm"),
      ngayKhoiChieu: Yup.date()
        .nullable()
        .typeError("")
        .required("Vui lòng chọn ngày khởi chiếu"),
      danhGia: Yup.string().required("Vui lòng đánh giá phim"),
    }),
    onSubmit: (values) => {
      let postValues = {
        ...values,
        ...{ ngayKhoiChieu: getFullDate(values.ngayKhoiChieu) },
      };

      if (poster === null) {
        alert("Vui lòng upload poster phim");
      } else {
        isEdited
          ? dispatch(editMovie(postValues, poster, user.accessToken))
          : dispatch(addMovie(postValues, poster, user.accessToken));
      }
    },
  });

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <Box className={styles.content}>
        <Typography className={styles.title} component="h1" variant="h5">
          Quản lý phim
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <Box className={styles.info}>
              <TextField
                className={styles.input}
                id="maNhom"
                name="maNhom"
                label="Mã nhóm"
                variant="outlined"
                type="text"
                size="small"
                disabled={isEdited}
                value={formik.values.maNhom}
                onChange={formik.handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                {...(formik.errors.maNhom && {
                  error: true,
                  helperText: formik.errors.maNhom,
                })}
              />

              <TextField
                className={styles.input}
                id="maPhim"
                name="maPhim"
                label="Mã phim"
                variant="outlined"
                type="text"
                size="small"
                disabled={isEdited}
                value={formik.values.maPhim}
                onChange={formik.handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                {...(formik.errors.maPhim && {
                  error: true,
                  helperText: formik.errors.maPhim,
                })}
              />

              <TextField
                className={styles.input}
                id="tenPhim"
                name="tenPhim"
                label="Tên phim"
                variant="outlined"
                type="text"
                size="small"
                value={formik.values.tenPhim}
                onChange={formik.handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                {...(formik.errors.tenPhim && {
                  error: true,
                  helperText: formik.errors.tenPhim,
                })}
              />

              <TextField
                className={styles.input}
                id="biDanh"
                name="biDanh"
                label="Bí danh"
                variant="outlined"
                type="text"
                size="small"
                value={formik.values.biDanh}
                onChange={formik.handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                {...(formik.errors.biDanh && {
                  error: true,
                  helperText: formik.errors.biDanh,
                })}
              />

              <TextField
                className={styles.input}
                id="trailer"
                name="trailer"
                label="Trailer"
                variant="outlined"
                type="text"
                size="small"
                value={formik.values.trailer}
                onChange={formik.handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                {...(formik.errors.trailer && {
                  error: true,
                  helperText: formik.errors.trailer,
                })}
              />

              <Box className={styles.datePicker}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    defaultValue={new Date()}
                    disableToolbar
                    autoOk
                    animateYearScrolling
                    variant="inline"
                    inputVariant="outlined"
                    size="small"
                    invalidDateMessage="Ngày không đúng định dạng"
                    maxDateMessage="Ngày chọn không được sau ngày 01/01/2100"
                    minDateMessage="Ngày chọn không được trước ngày 01/01/1900"
                    format="dd/MM/yyyy"
                    id="date"
                    label="Ngày khởi chiếu"
                    value={formik.values.ngayKhoiChieu}
                    onChange={(value) =>
                      formik.setFieldValue("ngayKhoiChieu", value)
                    }
                    style={{ width: "100%" }}
                  />
                  {formik.errors.ngayKhoiChieu ? (
                    <FormHelperText>
                      {formik.errors.ngayKhoiChieu}
                    </FormHelperText>
                  ) : null}
                </MuiPickersUtilsProvider>
              </Box>

              <TextField
                className={styles.input}
                id="danhGia"
                name="danhGia"
                label="Đánh giá"
                variant="outlined"
                type="number"
                value={formik.values.danhGia}
                onChange={formik.handleChange}
                InputProps={{
                  inputProps: {
                    max: 10,
                    min: 0,
                  },
                }}
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                {...(formik.errors.danhGia && {
                  error: true,
                  helperText: formik.errors.danhGia,
                })}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="moTa"
              name="moTa"
              label="Mô tả"
              multiline
              classes={{ root: `${styles.input} ${styles.desc}` }}
              rows={22}
              variant="outlined"
              value={formik.values.moTa}
              onChange={formik.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              {...(formik.errors.moTa && {
                error: true,
                helperText: formik.errors.moTa,
              })}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <ImageUploader
              className={styles.uploader}
              {...props}
              buttonText="Tải poster phim"
              label="Dung lượng file tối đa: 1MB"
              fileSizeError="Dung lượng file quá lớn"
              fileTypeError="Định dạng file không được hỗ trợ"
              withIcon={true}
              withPreview
              singleImage
              onChange={(image) => onDrop(image)}
              imgExtension={[".jpg", ".gif", ".png", ".gif"]}
              maxFileSize={1024000}
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
        {isEdited ? "Cập nhật" : "Thêm mới"}
      </Button>
    </form>
  );
};

export default MovieForm;
