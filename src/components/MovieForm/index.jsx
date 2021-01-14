import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import ImageUploader from "react-images-upload";
import useStyles from "./style";

const MovieForm = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [posters, setPosters] = useState([]);
  const styles = useStyles();

  const onDrop = (image) => {
    setPosters([...posters, image]);
    console.log(image);
  };

  return (
    <>
      <form noValidate autoComplete="off">
        <Box className={styles.content}>
          <Typography className={styles.title} component="h1" variant="h5">
            Quản lý phim
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Box className={styles.info}>
                <TextField
                  className={styles.input}
                  label="Mã nhóm"
                  variant="outlined"
                  type="text"
                  size="small"
                  defaultValue="GP00"
                />

                <TextField
                  className={styles.input}
                  label="Mã phim"
                  variant="outlined"
                  type="text"
                  size="small"
                  defaultValue="1283"
                />

                <TextField
                  className={styles.input}
                  label="Tên phim"
                  variant="outlined"
                  type="text"
                  size="small"
                  defaultValue="Trainwreck"
                />

                <TextField
                  className={styles.input}
                  label="Bí danh"
                  variant="outlined"
                  type="text"
                  size="small"
                  defaultValue="trainwreck"
                />

                <TextField
                  className={styles.input}
                  label="Trailer"
                  variant="outlined"
                  type="text"
                  size="small"
                  defaultValue="https://www.youtube.com/embed/2MxnhBPoIx4"
                />

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    autoOk
                    variant="inline"
                    inputVariant="outlined"
                    size="small"
                    invalidDateMessage="Ngày không đúng định dạng"
                    maxDateMessage="Ngày chọn không được sau ngày 01/01/2100"
                    minDateMessage="Ngày chọn không được trước ngày 01/01/1900"
                    format="dd/MM/yyyy"
                    id="start-date"
                    label="Ngày khởi chiếu"
                    value={startDate}
                    onChange={(date) => setStartDate(date)}
                    className={styles.datePicker}
                  />
                </MuiPickersUtilsProvider>

                <TextField
                  className={styles.input}
                  label="Đánh giá"
                  variant="outlined"
                  type="number"
                  InputProps={{
                    inputProps: {
                      max: 10,
                      min: 0,
                      step: 0.1,
                    },
                  }}
                  size="small"
                  defaultValue={5.0}
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="outlined-multiline-static"
                label="Mô tả"
                multiline
                className={styles.input}
                rows={21}
                defaultValue="Nhập mô tả..."
                variant="outlined"
              />
            </Grid>

            <Grid item xs={4}>
              <ImageUploader
                className={styles.uploader}
                {...props}
                buttonText="Tải poster phim"
                label="Định dạng file: jpg/gif/png. Dung lượng file tối đa: 5MB"
                fileSizeError="Dung lượng file quá lớn"
                fileTypeError="Định dạng file không được hỗ trợ"
                withIcon={true}
                withPreview
                singleImage
                onChange={onDrop}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880}
              />
            </Grid>
          </Grid>
        </Box>

        <Button variant="contained" color="secondary" className={styles.button}>
          Thêm
        </Button>
      </form>
    </>
  );
};

export default MovieForm;
