import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from "@material-ui/pickers";
import useStyles from "./style";
import { getAddCinemaInfo } from "../../redux/actions/cinemaAction";
import { addShowTime } from "../../redux/actions/adminAction";
import {
  getCinemaSystemId,
  getCinemaNumbers,
  getMovieId,
  getCinemaNumberId,
} from "../../helpers/search-manager";
import { getFullDate } from "../../helpers/time-manager";
import { useFormik } from "formik";
import * as Yup from "yup";

const ShowTimeForm = (props) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      system: "",
      cinema: "",
      number: "",
      movie: "",
      price: 75000,
      showTime: null,
    },
    validationSchema: Yup.object({
      system: Yup.string().required("Vui lòng chọn hệ thống rạp"),
      cinema: Yup.string().required("Vui lòng chọn cụm rạp"),
      number: Yup.string().required("Vui lòng chọn rạp"),
      movie: Yup.string().required("Vui lòng chọn phim"),
      price: Yup.string().required("Vui lòng nhập giá vé"),
      showTime: Yup.date()
        .nullable()
        .typeError("")
        .required("Vui lòng chọn ngày, giờ chiếu"),
    }),
    onSubmit: (values) => {
      const postData = {
        maPhim: getMovieId(movies, values.movie),
        ngayChieuGioChieu: getFullDate(values.showTime),
        maRap: getCinemaNumberId(cinemas, values.cinema, values.number),
        giaVe: values.price,
      };
      alert(JSON.stringify(postData, null, 2));

      dispatch(addShowTime(postData, token));
    },
  });

  const cinemaSystems = useSelector((state) => state.cinemaSystems.list);
  const cinemas = useSelector((state) => state.cinemas.listAdd);
  const cinemaNumbers = getCinemaNumbers(cinemas, formik.values.cinema);
  const movies = useSelector((state) => state.movies.list);
  const token = useSelector((state) => state.userLogin.accessToken);

  useEffect(() => {
    dispatch(
      getAddCinemaInfo(getCinemaSystemId(cinemaSystems, formik.values.system))
    );
  }, [cinemaSystems, dispatch, formik.values.system]);

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <Box className={styles.content}>
        <Typography className={styles.title} component="h1" variant="h5">
          Quản lý lịch chiếu
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <Box className={styles.info}>
              <FormControl
                variant="outlined"
                size="small"
                className={styles.dropDown}
              >
                <InputLabel>Hệ thống rạp</InputLabel>
                <Select
                  id="system"
                  name="system"
                  value={formik.values.system}
                  classes={{
                    select: styles.select,
                    icon: styles.icon,
                  }}
                  label="Hệ thống rạp"
                  onChange={formik.handleChange}
                >
                  {!cinemaSystems.length && (
                    <MenuItem value="" classes={{ root: styles.menuItem }}>
                      <em>Vui lòng chọn hệ thống rạp</em>
                    </MenuItem>
                  )}
                  {cinemaSystems.map((system) => (
                    <MenuItem
                      dense
                      index={system.maHeThongRap}
                      value={system.tenHeThongRap}
                      classes={{ root: styles.dropDownItem }}
                    >
                      {system.tenHeThongRap}
                    </MenuItem>
                  ))}
                </Select>
                {formik.errors.system ? (
                  <FormHelperText>{formik.errors.system}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl
                variant="outlined"
                size="small"
                className={styles.dropDown}
              >
                <InputLabel>Cụm rạp</InputLabel>
                <Select
                  id="cinema"
                  name="cinema"
                  value={formik.values.cinema}
                  classes={{
                    select: styles.select,
                    icon: styles.icon,
                  }}
                  label="Cụm rạp"
                  onChange={formik.handleChange}
                >
                  {!cinemas.length && (
                    <MenuItem value="" classes={{ root: styles.menuItem }}>
                      <em>Vui lòng chọn hệ thống rạp</em>
                    </MenuItem>
                  )}
                  {cinemas.map((system) => (
                    <MenuItem
                      dense
                      index={system.maCumRap}
                      value={system.tenCumRap}
                      classes={{ root: styles.dropDownItem }}
                    >
                      {system.tenCumRap}
                    </MenuItem>
                  ))}
                </Select>
                {formik.errors.cinema ? (
                  <FormHelperText>{formik.errors.cinema}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl
                variant="outlined"
                size="small"
                className={styles.dropDown}
              >
                <InputLabel>Rạp</InputLabel>
                <Select
                  id="number"
                  name="number"
                  value={formik.values.number}
                  classes={{
                    select: styles.select,
                    icon: styles.icon,
                  }}
                  label="Rạp"
                  onChange={formik.handleChange}
                >
                  {!cinemaNumbers.length && (
                    <MenuItem value="" classes={{ root: styles.menuItem }}>
                      <em>
                        {formik.values.system
                          ? "Vui lòng chọn cụm rạp"
                          : "Vui lòng chọn hệ thống rạp và cụm rạp"}
                      </em>
                    </MenuItem>
                  )}
                  {cinemaNumbers.map((number) => (
                    <MenuItem
                      dense
                      index={number}
                      value={number}
                      classes={{ root: styles.dropDownItem }}
                    >
                      {number}
                    </MenuItem>
                  ))}
                </Select>
                {formik.errors.number ? (
                  <FormHelperText>{formik.errors.number}</FormHelperText>
                ) : null}
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box className={styles.info}>
              <FormControl
                variant="outlined"
                size="small"
                className={styles.dropDown}
              >
                <InputLabel>Phim</InputLabel>
                <Select
                  id="movie"
                  name="movie"
                  value={formik.values.movie}
                  classes={{
                    select: styles.select,
                    icon: styles.icon,
                  }}
                  label="Phim"
                  onChange={formik.handleChange}
                >
                  {!movies.length && (
                    <MenuItem value="" classes={{ root: styles.menuItem }}>
                      <em>Vui lòng chọn phim</em>
                    </MenuItem>
                  )}
                  {movies.map((movie) => (
                    <MenuItem
                      dense
                      index={movie.maPhim}
                      value={movie.tenPhim}
                      classes={{ root: styles.dropDownItem }}
                    >
                      {movie.tenPhim}
                    </MenuItem>
                  ))}
                </Select>
                {formik.errors.movie ? (
                  <FormHelperText>{formik.errors.movie}</FormHelperText>
                ) : null}
              </FormControl>

              <TextField
                className={styles.input}
                id="price"
                name="price"
                value={formik.values.price}
                label="Giá vé (VND)"
                variant="outlined"
                type="number"
                InputProps={{
                  inputProps: {
                    min: 0,
                    step: 1000,
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
                onChange={formik.handleChange}
                {...(formik.errors.price && {
                  error: true,
                  helperText: formik.errors.price,
                })}
              />

              <Box className={styles.datePicker}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDateTimePicker
                    disableToolbar
                    autoOk
                    animateYearScrolling
                    variant="inline"
                    inputVariant="outlined"
                    size="small"
                    invalidDateMessage="Ngày không đúng định dạng"
                    maxDateMessage="Ngày chọn không được sau ngày 01/01/2100"
                    minDateMessage="Ngày chọn không được trước ngày 01/01/1900"
                    format="dd/MM/yyyy hh:mm a"
                    id="showTime"
                    name="showTime"
                    label="Ngày chiếu, giờ chiếu"
                    value={formik.values.showTime}
                    onChange={(value) =>
                      formik.setFieldValue("showTime", value)
                    }
                    style={{ width: "100%" }}
                  />
                  {formik.errors.showTime ? (
                    <FormHelperText>{formik.errors.showTime}</FormHelperText>
                  ) : null}
                </MuiPickersUtilsProvider>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Button
        variant="contained"
        color="secondary"
        className={styles.button}
        type="submit"
      >
        Thêm mới
      </Button>
    </form>
  );
};

export default ShowTimeForm;
