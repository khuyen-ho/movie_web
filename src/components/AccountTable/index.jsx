import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "../../components/Search";
import { Box } from "@material-ui/core";
import Table from "../DataTable";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./style";
import {
  chooseUser,
  deleteUser,
  getAccounts,
} from "../../redux/actions/adminAction";
import {
  GET_EDIT_STATUS,
  GET_EDITED_ACCOUNT,
} from "../../redux/actions/actionType";

const AccountTable = (props) => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const isEdited = useSelector((state) => state.accounts.isEdited);

  const accounts = useSelector((state) => state.accounts.list);
  const user = useSelector((state) => state.userLogin);

  let headers = [
    "Tên tài khoản",
    "Họ và tên",
    "Loại người dùng",
    "Email",
    "Số điện thoại",
    "Chỉnh sửa",
    "Xoá",
  ];

  useEffect(() => {
    dispatch(getAccounts());
  }, [dispatch]);

  const handleEdit = (account) => {
    dispatch({ type: GET_EDIT_STATUS, payload: true });
    dispatch({ type: GET_EDITED_ACCOUNT, payload: account });
    window.scrollTo(0, 0);
  };

  const handleDelete = (user) => {
    console.log(user);
    dispatch(deleteUser(user.taiKhoan, user.accessToken));
  };

  let data = accounts.map((account) => ({
    id: account.taiKhoan,
    fullName: account.hoTen,
    type: account.maLoaiNguoiDung,
    emal: account.email,
    phoneNumber: account.soDt,
    edit: (
      <IconButton
        onClick={() => handleEdit(account)}
        className={styles.iconButton}
      >
        <CreateIcon color="primary" />
      </IconButton>
    ),
    delete: (
      <IconButton
        onClick={() => handleDelete(account)}
        className={styles.iconButton}
      >
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
