import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Grid, TextField, Button } from "@material-ui/core";
import useStyles from "./style";
import { getAccountInfo } from "../../redux/actions/userAction";
import { bookTicket } from "../../redux/actions/bookingAction";
import { RESET_STATE } from "../../redux/actions/actionType";

const PriceInfo = ({ info }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const seatList = useSelector((state) => state.chosenSeat);
  const user = useSelector((state) => state.userLogin);
  const email = useSelector((state) => state.userAccount.email);
  const phone = useSelector((state) => state.userAccount.soDT);

  useEffect(() => {
    dispatch(getAccountInfo(user, { taiKhoan: user.taiKhoan }));
  }, [dispatch, user]);

  let ticketData = {
    maLichChieu: info.maLichChieu,
    danhSachVe: seatList.map((seat) => ({
      maGhe: seat.maGhe,
      giaVe: seat.giaVe,
    })),
    taiKhoanNguoiDung: user.taiKhoan,
  };

  const renderChosenSeats = (list) => {
    let seats = [];
    if (list.length) {
      seats.push(<span>{list[0].tenGhe}</span>);

      for (let i = 1; i < list.length; i++) {
        seats.push(<span>-{list[i].tenGhe}</span>);
      }
    }

    return seats;
  };

  let money = (seatList) => {
    let total = 0;
    for (let i = 0; i < seatList.length; i++) {
      total += seatList[i].giaVe;
    }
    return total;
  };

  const handleClick = () => {
    dispatch(bookTicket(ticketData, user.accessToken));
    dispatch({ type: RESET_STATE });
    history.push("/home");
  };

  return (
    <Box className={styles.root}>
      <Box className={`${styles.totalPrice} ${styles.dashedBoder}`}>
        <Typography variant="h4" className={`${styles.price} ${styles.center}`}>
          {money(seatList)} VND
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
            {renderChosenSeats(seatList)}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography className={`${styles.price} ${styles.right}`}>
            {money(seatList)} VND
          </Typography>
        </Grid>
      </Grid>

      <Box className={styles.userInfo}>
        <TextField
          className={styles.input}
          label="Email"
          variant="outlined"
          value={email}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          className={styles.input}
          label="Số điện thoại"
          variant="outlined"
          type="text"
          value={phone}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>

      <Button
        variant="contained"
        color="secondary"
        className={styles.button}
        onClick={() => handleClick()}
        disabled={ticketData.danhSachVe.length === 0}
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
