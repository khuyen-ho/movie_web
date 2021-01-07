import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CreateIcon from "@material-ui/icons/Create";
import {
  CssButton,
  CssIconButton,
  StyledTableCell,
  StyledTableRow,
  useStyles1,
  useStyles2,
} from "./style";
import BlockIcon from "@material-ui/icons/Block";
import SearchBar from "../SearchBar";
import { Box, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import AddIcon from "@material-ui/icons/Add";
const movieList = [
  {
    maPhim: 1314,
    tenPhim: "13 Reasons Why",
    biDanh: "13-reasons-why",
    trailer: "https://www.youtube.com/embed/1HpZevFifuo",
    hinhAnh:
      "http://movie0706.cybersoft.edu.vn/hinhanh/13-reasons-why_gp01.png",
    moTa:
      "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
    maNhom: "GP01",
    ngayKhoiChieu: "2020-12-21T00:00:00",
    danhGia: 10,
  },
  {
    maPhim: 1329,
    tenPhim: "Dao Kinh Hoang 12",
    biDanh: "dao-kinh-hoang-12",
    trailer: "https://www.youtube.com/embed/IHNzOHi8sJs",
    hinhAnh:
      "http://movie0706.cybersoft.edu.vn/hinhanh/dao-kinh-hoang-12_gp01.jpg",
    moTa: "Người càng xinh đẹp, càng dễ lừa dối người khác",
    maNhom: "GP01",
    ngayKhoiChieu: "2020-12-22T00:00:00",
    danhGia: 10,
  },
  {
    maPhim: 1344,
    tenPhim: "Gia dinh",
    biDanh: "gia-dinh",
    trailer: "string",
    hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/gia-dinh_gp01.jpg",
    moTa: "string",
    maNhom: "GP01",
    ngayKhoiChieu: "2020-11-30T00:00:00",
    danhGia: 10,
  },
];

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(id, name, pic, date) {
  return { id, name, pic, date };
}

const rows = movieList.map((movie) =>
  createData(movie.maPhim, movie.tenPhim, movie.hinhAnh, movie.ngayKhoiChieu)
);

function UserManagement() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Box my={1} display="flex">
        <SearchBar />
      </Box>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Mã phim</StyledTableCell>
              <StyledTableCell align="right">Tên phim</StyledTableCell>
              <StyledTableCell align="right">Hình ảnh</StyledTableCell>
              <StyledTableCell align="right">Ngày khởi chiếu</StyledTableCell>
              <StyledTableCell align="right">Chỉnh sửa/Xóa</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, index) => (
              <TableRow key={index}>
                <StyledTableCell align="right">{row.id}</StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">
                  <img src={row.pic} style={{ height: 60 }} />
                </StyledTableCell>
                <StyledTableCell align="right">{row.date}</StyledTableCell>
                <StyledTableCell align="right">
                  <EditButton />
                  <DeleteButton />
                </StyledTableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <Box textAlign='right' my={2}>
      <CssButton>Thêm</CssButton>
      </Box>
    </>
  );
}

const EditButton = (props) => (
  <CssIconButton aria-label="delete" style={{ color: "orange" }}>
    <CreateIcon />
  </CssIconButton>
);

const DeleteButton = (props) => (
  <CssIconButton aria-label="delete" style={{ color: "red" }}>
    <BlockIcon />
  </CssIconButton>
);

export default UserManagement;
