import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Grid, Typography, TextField, Button } from "@material-ui/core";
import DropDown from "../DropDown";
import DatePicker from "../DatePicker";
import useStyles from "./style";

const ShowTimeForm = (props) => {
  const cinemaSystems = useSelector((state) => state.cinemaSystems);
  const cinemas = useSelector((state) => state.cinemas);
  const movies = useSelector((state) => state.movies);
  const styles = useStyles();

  let cinemaSystemList = cinemaSystems.map((system) => system.tenHeThongRap);
  let cinemaList = cinemas.map((cinema) => cinema.tenCumRap);
  let cinemaNumberList = cinemas[1].danhSachRap.map(
    (cinemaNumber) => cinemaNumber.tenRap
  );
  let movieList = movies.map((movies) => movies.tenPhim);

  return (
    <>
      <form noValidate autoComplete="off">
        <Box className={styles.content}>
          <Typography className={styles.title} component="h1" variant="h5">
            Quản lý lịch chiếu
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Box className={styles.info}>
                <Box className={styles.dropDown}>
                  <DropDown label="Hệ thống rạp" list={cinemaSystemList} />
                </Box>
                <Box className={styles.dropDown}>
                  <DropDown label="Cụm rạp" list={cinemaList} />
                </Box>
                <Box className={styles.dropDown}>
                  <DropDown label="Rạp" list={cinemaNumberList} />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box className={styles.info}>
                <Box className={styles.dropDown}>
                  <DropDown label="Phim" list={movieList} />
                </Box>
                <TextField
                  className={styles.input}
                  label="Giá vé (VND)"
                  variant="outlined"
                  type="number"
                  InputProps={{
                    inputProps: {
                      min: 0,
                      step: 1000,
                    },
                  }}
                  size="small"
                  defaultValue={75000}
                />
                <TextField
                  className={styles.input}
                  label="Thời lượng (phút)"
                  variant="outlined"
                  type="number"
                  InputProps={{
                    inputProps: {
                      min: 0,
                      step: 1,
                    },
                  }}
                  size="small"
                  defaultValue={120}
                />
              </Box>
            </Grid>

            <Grid item xs={4}>
              <TextField
                className={styles.input}
                label="Mã lịch chiếu"
                variant="outlined"
                type="text"
                size="small"
                defaultValue={15235}
              />
              <Box className={styles.dropDown}>
                <DatePicker label="Ngày chiếu" />
              </Box>

              {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                  ampm={false}
                  variant="inline"
                  inputVariant="outlined"
                  label="Giờ chiếu"
                  size="small"
                  invalidDateMessage="Ngày không đúng định dạng"
                  maxDateMessage="Ngày chọn không được sau ngày 01/01/2100"
                  minDateMessage="Ngày chọn không được trước ngày 01/01/1900"
                  value={showTimeDate}
                  onChange={(date) => setShowTimeDate(date)}
                  className={styles.datePicker}
                />
              </MuiPickersUtilsProvider> */}
            </Grid>
          </Grid>
        </Box>
        <Button variant="contained" color="secondary" className={styles.button}>
          Thêm
        </Button>
      </form>
    </>
  );
};

export default ShowTimeForm;
