import React, { useState } from "react";
import { useSelector } from "react-redux";
import Search from "../../components/Search";
import { Box } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TablePaginationArrows from "../TablePaginationArrows";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { getFullDate } from "../../helpers/time-manager";
import useStyles from "./style";

const MovieTable = (props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const movies = useSelector((state) => state.movies);
  const styles = useStyles();

  let rows = movies.map((movie) => ({
    id: movie.maPhim,
    name: movie.tenPhim,
    startDate: movie.ngayKhoiChieu,
    score: movie.danhGia,
    poster: movie.hinhAnh,
  }));

  const renderBookingInfo = () => {
    console.log(rows);
    return (rowsPerPage > 0
      ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : rows
    ).map((row, index) => (
      <TableRow className={styles.row} key={index}>
        <TableCell className={styles.cell}>{row.id}</TableCell>
        <TableCell className={styles.cell}>{row.name}</TableCell>
        <TableCell className={styles.cell}>
          {getFullDate(row.startDate)}
        </TableCell>
        <TableCell className={styles.cell}>
          {parseFloat(row.score).toFixed(1)}
        </TableCell>
        <TableCell className={styles.cell}>
          <img src={row.poster} alt="img" className={styles.image} />
        </TableCell>
        <TableCell className={styles.cell}>
          <IconButton className={styles.iconButton}>
            <CreateIcon color="primary" />
          </IconButton>
          <IconButton className={styles.iconButton}>
            <DeleteIcon color="error" />
          </IconButton>
        </TableCell>
      </TableRow>
    ));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Box className={styles.search}>
        <Search />
      </Box>
      <TableContainer className={styles.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={styles.darkRow}>Mã phim</TableCell>
              <TableCell className={styles.darkRow}>Tên phim</TableCell>
              <TableCell className={styles.darkRow}>Ngày khởi chiếu</TableCell>
              <TableCell className={styles.darkRow}>Đánh giá</TableCell>
              <TableCell className={styles.darkRow}>Hình ảnh</TableCell>
              <TableCell className={styles.darkRow}>Chỉnh sửa/Xoá</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderBookingInfo()}</TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                className={`${styles.footer} ${styles.darkRow}`}
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

export default MovieTable;
