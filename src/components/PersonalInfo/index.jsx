import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Collapse,
} from "@material-ui/core";
import useStyles from "./style";

const PersonalInfo = (props) => {
  const [changePassword, setChangePassword] = React.useState(false);
  const styles = useStyles();

  return (
    <Container maxWidth="lg" className={styles.container}>
      <form noValidate autoComplete="off">
        <Box className={styles.info}>
          <Typography className={styles.title} component="h1" variant="h5">
            Thông tin cá nhân
          </Typography>

          <TextField
            classes={{ root: styles.input }}
            label="Tên tài khoản"
            variant="outlined"
            type="text"
            defaultValue="ctlong"
            InputProps={{
              readOnly: true,
            }}
          />

          <TextField
            classes={{ root: styles.input }}
            label="Họ và tên"
            variant="outlined"
            type="text"
            defaultValue="Cao Thanh Long"
          />

          <TextField
            classes={{ root: styles.input }}
            label="Email"
            variant="outlined"
            defaultValue="long@gmail.com"
          />

          <TextField
            classes={{ root: styles.input }}
            label="Số điện thoại"
            variant="outlined"
            type="text"
            defaultValue="0123456789"
          />

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
            <Box className={styles.info}>
              <TextField
                className={styles.input}
                label="Mật khẩu hiện tại"
                variant="outlined"
                type="password"
              />
              <TextField
                className={styles.input}
                label="Mật khẩu mới"
                variant="outlined"
                type="password"
              />
              <TextField
                className={styles.input}
                label="Xác nhận mật khẩu"
                variant="outlined"
                type="password"
              />
            </Box>
          </Collapse>
        </Box>
      </form>
    </Container>
  );
};

export default PersonalInfo;
