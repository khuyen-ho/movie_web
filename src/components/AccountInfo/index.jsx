import React from "react";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import DropDown from "../DropDown";
import useStyles from "./style";

const AccountInfo = (props) => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <form noValidate autoComplete="off">
        <Box className={styles.content}>
          <Typography className={styles.title} component="h1" variant="h5">
            Quản lý người dùng
          </Typography>

          <Box className={styles.info}>
            <TextField
              className={styles.input}
              label="Tên tài khoản"
              variant="outlined"
              type="text"
              defaultValue="ctlong"
            />

            <TextField
              className={styles.input}
              label="Họ và tên"
              variant="outlined"
              type="text"
              defaultValue="Cao Thanh Long"
            />

            <Box className={styles.input} display="inline-block">
              <DropDown
                label="Loại người dùng"
                list={["Quản trị", "Người dùng"]}
              />
            </Box>

            <TextField
              className={styles.input}
              label="Mật khẩu"
              variant="outlined"
              type="password"
              defaultValue="123"
            />

            <TextField
              className={styles.input}
              label="Email"
              variant="outlined"
              defaultValue="long@gmail.com"
            />

            <TextField
              className={styles.input}
              label="Số điện thoại"
              variant="outlined"
              type="text"
              defaultValue="0123456789"
            />
          </Box>
        </Box>

        <Button variant="contained" color="secondary" className={styles.button}>
          Thêm
        </Button>
      </form>
    </Box>
  );
};

export default AccountInfo;
