import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Table from "../DataTable";
import { getFullDate, getTime } from "../../helpers/time-manager";
import useStyles from "./style";

const BookingInfo = (props) => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const account = useSelector((state) => state.account);
  const styles = useStyles();

  let headers = [
    "Ngày đặt",
    "Mã vé",
    "Tên phim",
    "Giá vé (VND)",
    "Thời lượng (phút)",
    "Cụm rạp",
    "Tên rạp",
    "Số ghế",
  ];

  let data = account.thongTinDatVe.map((ticket) =>
    ticket.danhSachGhe.map((chair) => ({
      date: `${getFullDate(ticket.ngayDat)} ${getTime(ticket.ngayDat)}`,
      ticketId: ticket.maVe,
      movieTitle: ticket.tenPhim,
      price: ticket.giaVe,
      duration: ticket.thoiLuongPhim,
      cinema: chair.tenHeThongRap,
      cinemaNumber: chair.tenRap,
      chairNumber: chair.tenGhe,
    }))
  );

  data = [].concat.apply([], data);

  return (
    <>
      <Box className={styles.info}>
        <Typography className={styles.title} component="h1" variant="h5">
          Thông tin đặt vé
        </Typography>
      </Box>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Box className={styles.dateGroup}>
          <KeyboardDatePicker
            disableToolbar
            autoOk
            variant="inline"
            inputVariant="outlined"
            size="small"
            invalidDateMessage="Ngày không đúng định dạng"
            maxDateMessage="Ngày chọn không được sau ngày 01/01/2100"
            minDateMessage="Ngày chọn không được trước ngày 01/01/1900"
            format="dd/MM/yyyy"
            id="from-date"
            label="Từ ngày"
            value={fromDate}
            onChange={(date) => setFromDate(date)}
            className={styles.datePicker}
          />
          <KeyboardDatePicker
            disableToolbar
            autoOk
            variant="inline"
            inputVariant="outlined"
            size="small"
            invalidDateMessage="Ngày không đúng định dạng"
            maxDateMessage="Ngày chọn không được sau ngày 01/01/2100"
            minDateMessage="Ngày chọn không được trước ngày 01/01/1900"
            format="dd/MM/yyyy"
            id="to-date"
            label="Đến ngày"
            value={toDate}
            onChange={(date) => setToDate(date)}
            className={styles.datePicker}
          />
        </Box>
      </MuiPickersUtilsProvider>
      <Box className={styles.table}>
        <Table headers={headers} rows={data} maxWidth={920} maxHeight={500} />
      </Box>
    </>
  );
};

export default BookingInfo;
