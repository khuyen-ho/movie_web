import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { CssButton, useStyles } from "./style";
import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Container,
  FormControlLabel,
  TextField,
  Typography,
} from "@material-ui/core";

export default function UserModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CssButton onClick={handleOpen}>Thêm</CssButton>

      <Modal
        aria-labelledby="user-modal-title"
        aria-describedby="user-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Info />
        </Fade>
      </Modal>
    </div>
  );
}

const Info = (props) => {
  const [changePassword, setChangePassword] = React.useState(false);
  const styles = useStyles();

  return (
    <Container maxWidth="lg" className={styles.container}>
      <form noValidate autoComplete="off">
        <Box className={styles.info}>
          <Typography className={styles.title} component="h1" variant="h5">
            Điền thông tin
          </Typography>

          <TextField
            classes={{ root: styles.input }}
            label="Tên tài khoản"
            variant="outlined"
            type="text"
            InputProps={{
              readOnly: true,
            }}
          />

          <TextField
            classes={{ root: styles.input }}
            label="Họ và tên"
            variant="outlined"
            type="text"
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

        </Box>

        <Button variant="contained" color="secondary" className={styles.button}>
          LƯU LẠI
        </Button>
      </form>
    </Container>
  );
};
