import React from "react";
import { Box, Typography, TextField, Button } from "@material-ui/core";
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
          classes={{ root: styles.input }}
          label="Họ tên"
          variant="outlined"
          type="text"
        />

        <TextField
          classes={{ root: styles.input }}
          label="Tên tài khoản"
          variant="outlined"
          type="text"
        />

        <TextField
          classes={{ root: styles.input }}
          label="Mật khẩu"
          variant="outlined"
          type="password"
        />

        <TextField
          classes={{ root: styles.input }}
          label="Email"
          variant="outlined"
        />

        <TextField
          classes={{ root: styles.input }}
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
      </Box>
    </form>
  );
};

export default SignIn;
