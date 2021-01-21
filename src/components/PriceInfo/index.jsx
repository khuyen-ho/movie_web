import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Grid, TextField, Button } from "@material-ui/core";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CLEAR_SEAT } from "../../redux/actions/actionType";
import { bookTicket } from "../../redux/actions/bookingAction";

const PriceInfo = ({ showTimeInfo, userInfo, ...props }) => {
  const styles = useStyles();
  const seatList = useSelector((state) => state.chosenSeat);
  const user = useSelector((state) => state.userLogin);
  const chosenMovie = useSelector((state) => state.booking.thongTinPhim);
  let dataBookTicket = {
    maLichChieu: chosenMovie.maLichChieu,
    danhSachVe: seatList.map((item) => ({
      maGhe: item.maGhe,
      giaVe: item.giaVe,
    })),
    taiKhoanNguoiDung: user.taiKhoan,
  };
  let disable = true;
  dataBookTicket.danhSachVe.length === 0 ? (disable = true) : (disable = false);
  const renderSeatName = (list) => {
    if (list) return list.map((item) => <span>{item.tenGhe}-</span>);
  };

  let money = (seatList) => {
    let total = 0;
    for (let i = 0; i < seatList.length; i++) {
      total += seatList[i].giaVe;
    }
    return total;
  };
  const dispatch = useDispatch();

  const handleClick = () => {
    //console.log(props);
    //console.log(bookTicket(dataBookTicket, user.accessToken));
    dispatch(bookTicket(dataBookTicket, user.accessToken));
    props.history.replace("/home");
  };

  useEffect(() => {
    dispatch({ type: CLEAR_SEAT });
  }, []);

  return (
    <Box className={styles.root}>
      <Box className={`${styles.totalPrice} ${styles.dashedBoder}`}>
        <Typography variant="h4" className={`${styles.price} ${styles.center}`}>
          {money(seatList)}đ
        </Typography>
      </Box>

      <Box className={`${styles.showTimeInfo} ${styles.dashedBoder}`}>
        <Typography variant="subtitle1">
          Tên phim: {chosenMovie.tenPhim}
        </Typography>
        <Typography variant="body2">{`Rạp: ${chosenMovie.diaChi} - ${showTimeInfo.cinemaNumber}`}</Typography>
        <Typography variant="body2">{`Suất chiếu: ${chosenMovie.gioChieu} - ${chosenMovie.ngayChieu}`}</Typography>
      </Box>
      <Grid container className={`${styles.seats} ${styles.dashedBoder}`}>
        <Grid item xs={7}>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            component="span"
          >
            {`Ghế: `}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            component="span"
          >
            {/* 01, 02, 03, 04 */}
            {/* {console.log(seatList)} */}
            {renderSeatName(seatList)}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography className={`${styles.price} ${styles.right}`}>
            {money(seatList)}
          </Typography>
        </Grid>
      </Grid>

      <Box className={styles.userInfo}>
        <TextField
          className={styles.input}
          label="Email"
          variant="outlined"
          defaultValue={user.email}
        />
        <TextField
          className={styles.input}
          label="Số điện thoại"
          variant="outlined"
          type="text"
          defaultValue={user.soDT}
        />
      </Box>

      <Button
        variant="contained"
        color="secondary"
        className={styles.button}
        onClick={()=>handleClick()}
        disabled={disable}
      >
        ĐẶT VÉ
      </Button>
    </Box>
  );
};

PriceInfo.propTypes = {
  showTimeInfo: PropTypes.object,
  userInfo: PropTypes.object,
};

PriceInfo.defaultProps = {
  showTimeInfo: {
    id: 15290,
    movieName: "Trainwreck",
    cinema: "BHD Star Cineplex - 3/2",
    cinemaNumber: "Rạp 2",
    showTimeDate: "01/01/2019",
    showTime: "12:01",
  },
  userInfo: {
    email: "long@gmail.com",
    phoneNumber: "0123456789",
  },
};

export default PriceInfo;
