import { IconButton, Box } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const movieDemo = {
  maPhim: 1283,
  tenPhim: "Trainwreck",
  biDanh: "trainwreck",
  trailer: "https://www.youtube.com/embed/2MxnhBPoIx4",
  hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/trainwreck.jpg",
  moTa:
    "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.",
  maNhom: "GP00",
  ngayKhoiChieu: "2019-07-29T00:00:00",
  danhGia: 5,
};

const Trailer = () => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <img src={movieDemo.hinhAnh} alt="" className={styles.image} />
      <Box className={styles.overlay}>
        <IconButton classes={{ root: styles.play }}>
          <PlayCircleOutlineIcon classes={{ root: styles.playIcon }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Trailer;
