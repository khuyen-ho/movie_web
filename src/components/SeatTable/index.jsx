import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import WeekendIcon from "@material-ui/icons/Weekend";
import IconButton from "@material-ui/core/IconButton";
import useStyles from "./style";

const chairList = [
  { SoGhe: 1, TenGhe: "số 1 ", Gia: 100, TrangThai: false },
  { SoGhe: 2, TenGhe: "số 2 ", Gia: 100, TrangThai: false },
  { SoGhe: 3, TenGhe: "số 3 ", Gia: 100, TrangThai: false },
  { SoGhe: 4, TenGhe: "số 4 ", Gia: 100, TrangThai: false },
  { SoGhe: 5, TenGhe: "số 5 ", Gia: 100, TrangThai: false },
  { SoGhe: 6, TenGhe: "số 6 ", Gia: 100, TrangThai: false },
  { SoGhe: 7, TenGhe: "số 7 ", Gia: 100, TrangThai: false },
  { SoGhe: 8, TenGhe: "số 7 ", Gia: 100, TrangThai: false },
  { SoGhe: 9, TenGhe: "số 9 ", Gia: 100, TrangThai: false },
  { SoGhe: 10, TenGhe: "số 10 ", Gia: 100, TrangThai: false },
  { SoGhe: 11, TenGhe: "số 11 ", Gia: 100, TrangThai: false },
  { SoGhe: 12, TenGhe: "số 12 ", Gia: 100, TrangThai: false },
  { SoGhe: 13, TenGhe: "số 13 ", Gia: 100, TrangThai: false },
  { SoGhe: 14, TenGhe: "số 14 ", Gia: 100, TrangThai: false },
  { SoGhe: 15, TenGhe: "số 15 ", Gia: 100, TrangThai: false },
  { SoGhe: 16, TenGhe: "số 16 ", Gia: 100, TrangThai: false },
  { SoGhe: 17, TenGhe: "số 17 ", Gia: 100, TrangThai: false },
  { SoGhe: 18, TenGhe: "số 18 ", Gia: 100, TrangThai: false },
  { SoGhe: 19, TenGhe: "số 19 ", Gia: 100, TrangThai: false },
  { SoGhe: 20, TenGhe: "số 20 ", Gia: 100, TrangThai: false },
  { SoGhe: 21, TenGhe: "số 21 ", Gia: 100, TrangThai: false },
  { SoGhe: 22, TenGhe: "số 22 ", Gia: 100, TrangThai: false },
  { SoGhe: 23, TenGhe: "số 23 ", Gia: 100, TrangThai: false },
  { SoGhe: 24, TenGhe: "số 24 ", Gia: 100, TrangThai: false },
  { SoGhe: 25, TenGhe: "số 25 ", Gia: 100, TrangThai: false },
  { SoGhe: 26, TenGhe: "số 26 ", Gia: 100, TrangThai: false },
  { SoGhe: 27, TenGhe: "số 27 ", Gia: 100, TrangThai: false },
  { SoGhe: 28, TenGhe: "số 28 ", Gia: 100, TrangThai: false },
  { SoGhe: 29, TenGhe: "số 29 ", Gia: 100, TrangThai: false },
  { SoGhe: 30, TenGhe: "số 30 ", Gia: 100, TrangThai: true },
  { SoGhe: 31, TenGhe: "số 31 ", Gia: 100, TrangThai: false },
  { SoGhe: 32, TenGhe: "số 32 ", Gia: 100, TrangThai: false },
  { SoGhe: 33, TenGhe: "số 33 ", Gia: 100, TrangThai: false },
  { SoGhe: 34, TenGhe: "số 34 ", Gia: 100, TrangThai: false },
  { SoGhe: 35, TenGhe: "số 35 ", Gia: 100, TrangThai: false },
];

const SeatTable = (props) => {
  const classes = useStyles();
  return (
    <Box textAlign="center">
      <Grid container>
        <Grid item xs={12}>
          <Container className={classes.title}>
            <div className={classes.leftTitle}>
              <div className={classes.logo}>
                <img
                  src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
                  alt=""
                />
              </div>
              <div className={classes.cinema}>
                <Typography variant="h6">
                  BHD Star <span> - Vincom 3/2</span>
                </Typography>
                <Typography>- 21:35 - RẠP 4</Typography>
              </div>
            </div>
            <div className={classes.rightTitle}>
              <Typography>Thời gian giữ ghế</Typography>
            </div>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.screen}>
            <img src="./imgs/screen.png" alt="" />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.seatArea}>
            {chairList.map((item, index) => (
              <span>
                <IconButton aria-label="delete">
                  <WeekendIcon />
                </IconButton>
              </span>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.note}>
            <span className={classes.noteChair}>
              <WeekendIcon />
              <Typography component="span">Ghế đang chọn</Typography>
            </span>
            <span className={classes.noteChair}>
              <WeekendIcon />
              <Typography component="span">Ghế đã chọn</Typography>
            </span>
            <span className={classes.noteChair}>
              <WeekendIcon />
              <Typography component="span">Ghế không thể chọn</Typography>
            </span>
            <span className={classes.noteChair}>
              <WeekendIcon />
              <Typography component="span">Ghế VIP</Typography>
            </span>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SeatTable;
