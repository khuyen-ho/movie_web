import { Button, IconButton, Typography } from "@material-ui/core";
import React, { Component } from "react";
import Rating from "../rating/Rating";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
const BannerDetail = (props) => {
  const movie = {
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
  return (
    <div>
      <div className="img">
        <img src={movie.hinhAnh} alt="" />
        <div className="img__overlay">
          <IconButton>
            <PlayCircleOutlineIcon />
          </IconButton>
        </div>
      </div>
      <div className="title">
        <Typography className="titleMovie" component="h6" variant="h6">
          {movie.tenPhim}
        </Typography>

        {/* <button>MUA VÉ</button> */}
        <Button fullWidth>MUA VÉ</Button>
      </div>
      <div className="score">
        <Typography className="point" variant="h6">
          {parseFloat(movie.danhGia)}
        </Typography>
        <Rating courseItem={movie} />
      </div>
      <div>
  <Typography>{movie.moTa}</Typography>
  <Typography>{movie.ngayKhoiChieu}</Typography>
      </div>
    </div>
  );
};

export default BannerDetail;
