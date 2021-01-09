import React from "react";
import { Box, Typography, TextField, Button, Link } from "@material-ui/core";
import useStyles from "./style";

const SignIn = (props) => {
  const styles = useStyles();

  return (
    <form className={styles.root} noValidate autoComplete="off">
      <Box className={styles.content}>
        <Typography className={styles.title} variant="h6">
          ĐĂNG KÝ
        </Typography>

        <TextField
          className={styles.input}
          label="Họ tên"
          variant="outlined"
          type="text"
        />

        <TextField
          className={styles.input}
          label="Tên tài khoản"
          variant="outlined"
          type="text"
        />

        <TextField
          className={styles.input}
          label="Mật khẩu"
          variant="outlined"
          type="password"
        />

        <TextField
          classes={styles.input}
          label="Xác nhận mật khẩu"
          variant="outlined"
          type="password"
        />

        <TextField
          classes={styles.input}
          label="Email"
          variant="outlined"
          type="email
        />

        <TextField
          className={styles.input}
          label="Số điện thoại"
          variant="outlined"
          type="text"
        />

        <Button
          variant="contained"
          color="secondary"
          fullWidth
          className={styles.button}
        >
          ĐĂNG KÝ
        </Button>

        <Typography component="span" className={styles.label}>
          {`Đã có tài khoản? `}
          <Link
            href="#"
            className={`${styles.label} ${styles.link}`}
            variant="subtitle1"
          >
            Đăng nhập
          </Link>
        </Typography>
      </Box>
    </form>
  );
};

export default SignIn;
