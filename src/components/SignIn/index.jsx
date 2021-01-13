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
import { NavLink } from "react-router-dom";

const SignIn = (props) => {
  const styles = useStyles();

  return (
    <form className={styles.root} noValidate autoComplete="off">
      <Box className={styles.content}>
        <Typography className={styles.title} variant="h6">
          ĐĂNG NHẬP
        </Typography>

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
          <NavLink to="/signup">
            <Link
              href="#"
              className={`${styles.label} ${styles.link}`}
              variant="subtitle1"
            >
              Đăng ký tài khoản
            </Link>
          </NavLink>
        </Box>
      </Box>
    </form>
  );
};

export default SignIn;
