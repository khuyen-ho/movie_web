import React from "react";
import {
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Collapse,
  Button,
} from "@material-ui/core";
import useStyles from "./style";

const PersonalInfo = (props) => {
  const [changePassword, setChangePassword] = React.useState(false);
  const styles = useStyles();

  return (
    <>
      <form noValidate autoComplete="off">
        <Box className={styles.content}>
          <Typography className={styles.title} component="h1" variant="h5">
            Thông tin cá nhân
          </Typography>

          <Box className={styles.info}>
            <TextField
              className={styles.input}
              label="Tên tài khoản"
              variant="outlined"
              type="text"
              size="small"
              defaultValue="ctlong"
            />

            <TextField
              className={styles.input}
              label="Họ và tên"
              variant="outlined"
              type="text"
              size="small"
              defaultValue="Cao Thanh Long"
            />

            <TextField
              className={styles.input}
              label="Email"
              variant="outlined"
              type="email"
              size="small"
              defaultValue="long@gmail.com"
            />

            <TextField
              className={styles.input}
              label="Số điện thoại"
              variant="outlined"
              type="text"
              size="small"
              defaultValue="0123456789"
            />
          </Box>

          <FormControlLabel
            classes={{ root: styles.checkbox, label: styles.label }}
            control={
              <Checkbox
                checked={changePassword}
                onChange={() => setChangePassword(!changePassword)}
                name="changePassword"
              />
            }
            label="Đổi mật khẩu"
          />

          <Collapse in={changePassword} timeout="auto">
            <Box className={styles.content}>
              <TextField
                className={styles.input}
                label="Mật khẩu hiện tại"
                variant="outlined"
                type="password"
                size="small"
              />
              <TextField
                className={styles.input}
                label="Mật khẩu mới"
                variant="outlined"
                type="password"
                size="small"
              />
              <TextField
                className={styles.input}
                label="Xác nhận mật khẩu"
                variant="outlined"
                type="password"
                size="small"
              />
            </Box>
          </Collapse>
        </Box>

        <Button variant="contained" color="secondary" className={styles.button}>
          LƯU LẠI
        </Button>
      </form>
    </>
  );
};

export default PersonalInfo;
