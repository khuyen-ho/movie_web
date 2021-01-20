import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "../../components/Search";
import { Box } from "@material-ui/core";
import Table from "../DataTable";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./style";
import { chooseUser, deleteUser, getAccounts } from "../../redux/actions/adminAction";
const AccountTable = (props) => {
  const accounts = useSelector((state) => state.accounts);
  const userLogin = useSelector((state) => state.userLogin);
  const styles = useStyles();

  let headers = [
    "Tên tài khoản",
    "Họ và tên",
    "Loại người dùng",
    "Email",
    "Số điện thoại",
    "Chỉnh sửa",
    "Xoá",
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAccounts());
  }, []);

  const handleEdit = (user) => {
    dispatch(chooseUser(user));
  };

  const handleDelete = (user) => {
    console.log(user);
    dispatch(deleteUser(user.taiKhoan,userLogin.accessToken,props));
  };

  let data = accounts.map((account) => ({
    id: account.taiKhoan,
    fullName: account.hoTen,
    type: account.maLoaiNguoiDung,
    emal: account.email,
    phoneNumber: account.soDt,
    edit: (
      <IconButton onClick={()=>handleEdit(account)} className={styles.iconButton}>
        <CreateIcon color="primary" />
      </IconButton>
    ),
    delete: (
      <IconButton onClick={()=>handleDelete(account)} className={styles.iconButton}>
        <DeleteIcon color="error" />
      </IconButton>
    ),
  }));

  return (
    <>
      <Box className={styles.search}>
        <Search />
      </Box>
      <Box className={styles.table}>
        <Table
          headers={headers}
          rows={data}
          maxWidth={"100%"}
          maxHeight={500}
        />
      </Box>
    </>
  );
};

export default AccountTable;
