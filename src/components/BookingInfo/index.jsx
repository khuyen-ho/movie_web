import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TablePaginationArrows from "../TablePaginationArrows";
import { getFullDate, getTime } from "../../helpers/time-manager";
import useStyles from "./style";

const BookingInfo = (props) => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const account = useSelector((state) => state.account);
  const styles = useStyles();

  let rows = account.thongTinDatVe.map((ticket) =>
    ticket.danhSachGhe.map((chair) => ({
      date: ticket.ngayDat,
      ticketId: ticket.maVe,
      movieTitle: ticket.tenPhim,
      price: ticket.giaVe,
      duration: ticket.thoiLuongPhim,
      cinema: chair.tenHeThongRap,
      cinemaNumber: chair.tenRap,
      chairNumber: chair.tenGhe,
    }))
  );

  rows = [].concat.apply([], rows);

  const renderBookingInfo = () => {
    console.log(rows);
    return (rowsPerPage > 0
      ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : rows
    ).map((row, index) => (
      <TableRow className={styles.row} key={index}>
        <TableCell className={styles.cell}>{`${getFullDate(row.date)} ${getTime(
          row.date
        )}`}</TableCell>
        <TableCell className={styles.cell}>{row.ticketId}</TableCell>
        <TableCell className={styles.cell}>{row.movieTitle}</TableCell>
        <TableCell className={styles.cell}>{row.price}</TableCell>
        <TableCell className={styles.cell}>{row.duration}</TableCell>
        <TableCell className={styles.cell}>{row.cinema}</TableCell>
        <TableCell className={styles.cell}>{row.cinemaNumber}</TableCell>
        <TableCell className={styles.cell}>{row.chairNumber}</TableCell>
      </TableRow>
    ));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

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
      <TableContainer className={styles.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={styles.darkCell}>Ngày đặt</TableCell>
              <TableCell className={styles.darkCell}>Mã vé</TableCell>
              <TableCell className={styles.darkCell}>Tên phim</TableCell>
              <TableCell className={styles.darkCell}>Giá vé (VND)</TableCell>
              <TableCell className={styles.darkCell}>
                Thời lượng (phút)
              </TableCell>
              <TableCell className={styles.darkCell}>Cụm rạp</TableCell>
              <TableCell className={styles.darkCell}>Tên rạp</TableCell>
              <TableCell className={styles.darkCell}>Số ghế</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderBookingInfo()}</TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                className={`${styles.footer} ${styles.darkCell}`}
                classes={{
                  select: styles.select,
                  selectIcon: styles.selectIcon,
                }}
                colSpan={8}
                labelRowsPerPage="Số hàng mỗi trang"
                rowsPerPageOptions={[10, 25, 100]}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationArrows}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};

export default BookingInfo;
