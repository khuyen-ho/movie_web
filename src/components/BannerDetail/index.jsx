import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import Rating from "../rating/Rating";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import useStyles from "./style";
import Trailer from "../Trailer";

const BannerDetail = (props) => {
  const movie = {
    maPhim: 1288,
    tenPhim: "Jurassic World",
    biDanh: "jurassic-world",
    trailer: "https://www.youtube.com/embed/RFinNxS5KN4",
    hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/jurassicworld.jpg",
    moTa:
      "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
    maNhom: "GP00",
    ngayKhoiChieu: "2019-07-29T00:00:00",
    danhGia: 5,
  };
  const styles = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box className={styles.root}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={3}>
            <Box maxWidth={200}>
              <Trailer
                image={movie.hinhAnh}
                shadowColor="black"
                layoutBackground={false}
              />
            </Box>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BannerDetail;
