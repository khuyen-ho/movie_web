import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid } from "@material-ui/core";
import DatePicker from "../DatePicker";
import ImageUploader from "react-images-upload";
import useStyles from "./style";

const MovieForm = (props) => {
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
            <Grid item xs={12} md={4}>
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

                <Box className={styles.datePicker}>
                  <DatePicker label="Ngày khởi chiếu" />
                </Box>

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
            <Grid item xs={12} md={4}>
              <TextField
                id="outlined-multiline-static"
                label="Mô tả"
                multiline
                classes={{ root: `${styles.input} ${styles.desc}` }}
                rows={22}
                defaultValue="Nhập mô tả..."
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <ImageUploader
                className={styles.uploader}
                {...props}
                buttonText="Tải poster phim"
                label="Dung lượng file tối đa: 5MB"
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
