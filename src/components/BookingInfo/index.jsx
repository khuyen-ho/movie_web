import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@material-ui/core";
import DatePicker from "../DatePicker";
import Table from "../DataTable";
import { getFullDate, getTime } from "../../helpers/time-manager";
import useStyles from "./style";

const BookingInfo = (props) => {
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

      <Box className={styles.dateGroup}>
        <Box className={styles.datePicker}>
          <DatePicker label="Từ ngày" />
        </Box>
        <Box className={styles.datePicker}>
          <DatePicker label="Đến ngày" />
        </Box>
      </Box>

      <Box className={styles.table}>
        <Table headers={headers} rows={data} maxWidth={920} maxHeight={500} />
      </Box>
    </>
  );
};

export default BookingInfo;
