import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Grid, TextField, Button } from "@material-ui/core";
import useStyles from "./style";
import { useEffect } from "react";
import { CLEAR_SEAT } from "../../redux/actions/actionType";
import { bookTicket } from "../../redux/actions/bookingAction";

const PriceInfo = ({ info }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const seatList = useSelector((state) => state.chosenSeat);
  const user = useSelector((state) => state.userLogin);

  let dataBookTicket = {
    maLichChieu: info.maLichChieu,
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

  const handleClick = () => {
    //console.log(props);
    //console.log(bookTicket(dataBookTicket, user.accessToken));
    dispatch(bookTicket(dataBookTicket, user.accessToken));
    // props.history.replace("/home");
  };

  // useEffect(() => {
  //   dispatch({ type: CLEAR_SEAT });
  // }, []);

  return (
    <Box className={styles.root}>
      <Box className={`${styles.totalPrice} ${styles.dashedBoder}`}>
        <Typography variant="h4" className={`${styles.price} ${styles.center}`}>
          {money(seatList)}đ
        </Typography>
      </Box>

      <Box className={`${styles.showTimeInfo} ${styles.dashedBoder}`}>
        <Typography variant="subtitle1">Tên phim: {info.tenPhim}</Typography>
        <Typography variant="body2">{`Cụm rạp: ${info.diaChi}`}</Typography>
        <Typography variant="body2">{`Rạp: ${info.tenRap}`}</Typography>
        <Typography variant="body2">{`Suất chiếu: ${info.gioChieu} - ${info.ngayChieu}`}</Typography>
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
        onClick={() => handleClick()}
        disabled={disable}
      >
        ĐẶT VÉ
      </Button>
    </Box>
  );
};

PriceInfo.propTypes = {
  info: PropTypes.object,
};

PriceInfo.defaultProps = {
  info: {},
};

export default PriceInfo;
