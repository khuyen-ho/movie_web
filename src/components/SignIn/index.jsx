import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Link,
} from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import useStyles from "./style";

const SignIn = (props) => {
  const styles = useStyles();

  return (
    <form className={styles.root} noValidate autoComplete="off">
      <Box className={styles.content}>
        <Typography className={styles.title} variant="h6">
          ĐĂNG NHẬP
        </Typography>

        <TextField
          classes={{ root: styles.input }}
          label="Tên tài khoản"
          variant="outlined"
        />

        <TextField
          classes={{ root: styles.input }}
          label="Mật khẩu"
          variant="outlined"
          type="password"
          enAdr
        />

        <Button
          variant="contained"
          color="secondary"
          fullWidth
          className={styles.button}
        >
          ĐĂNG NHẬP
        </Button>

        <Box className={styles.bottomGroup}>
          <FormControlLabel
            classes={{ root: styles.switch, label: styles.label }}
            control={<Switch name="keepLoggedIn" />}
            label="Duy trì đăng nhập"
          />
          <Link
            href="#"
            className={`${styles.label} ${styles.link}`}
            variant="subtitle1"
          >
            Quên mật khẩu
          </Link>
        </Box>
      </Box>
    </form>
  );
};

export default SignIn;
