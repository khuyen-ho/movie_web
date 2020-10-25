import { Box, Button, ButtonGroup, Typography } from "@material-ui/core";
import React, { Component } from "react";
import useStyles from "./style";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import moment from "moment";

const defaultList = {
  lichChieu: [
    {
      thongTinRap: {
        maRap: 469,
        tenRap: "Rạp 9",
        maCumRap: "bhd-star-cineplex-bitexco",
        tenCumRap: "BHD Star Cineplex - Bitexco",
        maHeThongRap: "BHDStar",
        tenHeThongRap: "BHD Star Cineplex",
      },
      maLichChieu: 16207,
      maRap: 469,
      maPhim: 1316,
      tenPhim: "Ted 3",
      ngayChieuGioChieu: "2019-01-01T10:10:00",
      giaVe: 75000,
      thoiLuong: 120,
    },
    {
      thongTinRap: {
        maRap: 469,
        tenRap: "Rạp 9",
        maCumRap: "bhd-star-cineplex-bitexco",
        tenCumRap: "BHD Star Cineplex - Bitexco",
        maHeThongRap: "BHDStar",
        tenHeThongRap: "BHD Star Cineplex",
      },
      maLichChieu: 16228,
      maRap: 469,
      maPhim: 1316,
      tenPhim: "Ted 3",
      ngayChieuGioChieu: "2019-01-04T16:10:00",
      giaVe: 75000,
      thoiLuong: 120,
    },
    {
      thongTinRap: {
        maRap: 469,
        tenRap: "Rạp 9",
        maCumRap: "bhd-star-cineplex-bitexco",
        tenCumRap: "BHD Star Cineplex - Bitexco",
        maHeThongRap: "BHDStar",
        tenHeThongRap: "BHD Star Cineplex",
      },
      maLichChieu: 16210,
      maRap: 469,
      maPhim: 1316,
      tenPhim: "Ted 3",
      ngayChieuGioChieu: "2019-01-01T16:10:00",
      giaVe: 75000,
      thoiLuong: 120,
    },
    {
      thongTinRap: {
        maRap: 725,
        tenRap: "Rạp 5",
        maCumRap: "cns-hai-ba-trung",
        tenCumRap: "CNS - Hai Bà Trưng",
        maHeThongRap: "CineStar",
        tenHeThongRap: "CineStar",
      },
      maLichChieu: 30045,
      maRap: 725,
      maPhim: 1316,
      tenPhim: "Ted 3",
      ngayChieuGioChieu: "2019-01-04T14:10:00",
      giaVe: 75000,
      thoiLuong: 120,
    },
  ],
  maPhim: 1316,
  tenPhim: "Ted 3",
  biDanh: "ted-3",
  trailer: "https://www.youtube.com/embed/S3AVcCggRnU",
  hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/ted-3_gp03.jpg",
  moTa:
    "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
  maNhom: "GP03",
  ngayKhoiChieu: "2020-10-09T14:08:02.207",
  danhGia: 10,
};

const FilterMovieList = (defaultList) => {
  const list = [
    // {
    //   maHeThongRap: "BHDStar",
    //   cumRap: {
    //     maCumRap: "bhd-star-cineplex-bitexco",
    //      tenCumRap:
    //     ngayChieuGioChieu: ["2019-01-01T10:10:00"],
    //     giaVe: 75000,
    //     thoiLuong: 120,
    //   },
    // },
  ];
  defaultList.lichChieu.forEach((cinema) => {
    let idx = list.findIndex(
      (cinemaInfo) =>
        cinemaInfo.maHeThongRap === cinema.thongTinRap.maHeThongRap
    );
    if (idx !== -1) {
      list[idx].cumRap.ngayChieuGioChieu.push(cinema.ngayChieuGioChieu);
    } else {
      list.push({
        maHeThongRap: cinema.thongTinRap.maHeThongRap,
        cumRap: {
          maCumRap: cinema.thongTinRap.maCumRap,
          tenCumRap: cinema.thongTinRap.tenCumRap,
          ngayChieuGioChieu: [cinema.ngayChieuGioChieu],
          giaVe: cinema.giaVe,
          thoiLuong: cinema.thoiLuong,
        },
      });
    }
  });

  return list;
};

//movieInfo: item in a list
const Time = (movieInfo) => {
  const classes = useStyles();
  console.log(movieInfo);
  return movieInfo.cumRap.ngayChieuGioChieu.map((item, index) => (
    <Button className={classes.timeBtn} key={index}>
      <div className="time">
        {/* {console.log(item)} */}
        <Typography variant="h6" component="span" className="timeStart">
          {moment(item).format("hh:mm")}
          {/* {console.log(item)} */}
        </Typography>
        <Typography variant="subtitle1" component="span" className="timeEnd">
          ~
          {moment(item)
            .minute(moment(item).minute() + movieInfo.cumRap.thoiLuong)
            .format("hh:mm")}
        </Typography>
      </div>
    </Button>
  ));
};

const RenderShowTime = (list, defaultList) => {
  const classes = useStyles();

  // const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  const [openArr=[],setOpen] = React.useState([]);
  for(let i=0;i<list.length;i++){
    let temp = false;
    openArr.push(temp);
  }
  const handleClick = (idx) => {
      let newArr = [...openArr]
      newArr[idx] = !newArr[idx]
      setOpen(newArr)
   };

console.log(openArr);

  return list.map((item, index) => (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
      key={index}
    >
      <ListItem button onClick={()=>handleClick(index)}>
        <ListItemIcon>
          <img className={classes.img} src={defaultList.hinhAnh} alt="" />
        </ListItemIcon>
        <Typography className={classes.title} component="h6" variant="h6">
          {item.cumRap.tenCumRap}
        </Typography>
        {openArr[index] ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openArr[index]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            {Time(item)}
          </ListItem>
        </List>
      </Collapse>
    </List>
  ));
};

const ShowTime = (props = defaultList) => {
  const filteredList = FilterMovieList(defaultList);

  return <>{RenderShowTime(filteredList, defaultList)}</>;
};

export default ShowTime;
