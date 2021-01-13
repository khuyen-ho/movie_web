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
const userList = [
  {
    taiKhoan: "123",
    hoTen: "Ngô123",
    email: "123456hehe@gmail.com",
    soDt: "0387033403",
    matKhau: "123",
    maLoaiNguoiDung: "QuanTri",
  },
  {
    taiKhoan: "123@admin",
    hoTen: "Thiện Soiii 1",
    email: "anhgioi@gmail.com",
    soDt: "0387033409",
    matKhau: "12344555",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "123q",
    hoTen: "Kiêt chóa",
    email: "123q@gmail.com",
    soDt: "0972696969",
    matKhau: "123",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "1565207820332044",
    hoTen: "Khánh Huỳnh",
    email: "fb_khanh000huynh@gmail.com",
    soDt: "123456",
    matKhau: "1565207820332044",
    maLoaiNguoiDung: "KhachHang",
  },
  {
    taiKhoan: "account1229",
    hoTen: "Âu Dươngg",
    email: "account1229@gmail.com",
    soDt: "0912346789",
    matKhau: "123456",
    maLoaiNguoiDung: "KhachHang",
  },
];

function createData(username, fullname, email, phone, role) {
  return { username, fullname, email, phone, role };
}

const rows = userList.map((user) =>
  createData(
    user.taiKhoan,
    user.hoTen,
    user.email,
    user.soDt,
    user.maLoaiNguoiDung
  )
);

const EditButton = (props) => (
  <CssIconButton aria-label="delete" style={{color:"orange"}}>
    <CreateIcon />
  </CssIconButton>
);

const DeleteButton = (props) => (
  <CssIconButton aria-label="delete" style={{color:"red"}}>
    <BlockIcon />
  </CssIconButton>
);
function ScheduleManagement() {
  const classes = useStyles();
  return (
    <>
   Schedule management
    </>
  );
}

export default ScheduleManagement;
