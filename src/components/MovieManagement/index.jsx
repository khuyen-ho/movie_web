import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CreateIcon from "@material-ui/icons/Create";
import useStyles, {
  CssIconButton,
  StyledTableCell,
  StyledTableRow,
} from "./style";
import BlockIcon from "@material-ui/icons/Block";
import SearchBar from "../SearchBar";
import { Box } from "@material-ui/core";
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
  }
];

function createData(id, name, pic, date) {
  return { id, name, pic, date };
}

const rows = movieList.map((movie) =>
  createData(movie.maPhim, movie.tenPhim, movie.hinhAnh, movie.ngayKhoiChieu)
);

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

function MovieManagement() {
  const classes = useStyles();
  return (
    <>
      <Box my={2}>
        <SearchBar />
      </Box>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
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
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="right">{row.id}</StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.pic}</StyledTableCell>
                <StyledTableCell align="right">{row.date}</StyledTableCell>
                <StyledTableCell align="right">
                  <EditButton />
                  <DeleteButton />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default MovieManagement;
