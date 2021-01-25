import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@material-ui/core";
// import DatePicker from "../DatePicker";
import Table from "../DataTable";
import { getFullDate, getTime } from "../../helpers/time-manager";
import { flatArray } from "../../helpers/array-manager";
// import { GET_FROM_DATE } from "../../redux/actions/actionType";
import useStyles from "./style";

const BookingInfo = (props) => {
  const info = useSelector((state) => state.userAccount.thongTinDatVe);
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

  let data = [];

  if (info) {
    data = info.map((ticket) =>
      ticket.danhSachGhe.map((seat) => ({
        date: `${getFullDate(ticket.ngayDat)} ${getTime(ticket.ngayDat)}`,
        ticketId: ticket.maVe,
        movieTitle: ticket.tenPhim,
        price: ticket.giaVe,
        duration: ticket.thoiLuongPhim,
        cinema: seat.tenHeThongRap,
        cinemaNumber: seat.tenRap,
        seatNumber: seat.tenGhe,
      }))
    );

    data = flatArray(data);
  }
  console.log(data);

  return (
    <>
      <Box className={styles.info}>
        <Typography className={styles.title} component="h1" variant="h5">
          Thông tin đặt vé
        </Typography>

        {/* <Box className={styles.dateGroup}>
        <Box className={styles.datePicker}>
          <DatePicker
            label="Từ ngày"
            date={fromDate}
            dispatchType={GET_FROM_DATE}
          />
        </Box>
        <Box className={styles.datePicker}>
          <DatePicker label="Đến ngày" />
        </Box>
      </Box> */}

        <Box className={styles.table}>
          <Table
            headers={headers}
            rows={data}
            maxWidth={"100%"}
            maxHeight={500}
          />
        </Box>
      </Box>
    </>
  );
};

export default BookingInfo;
