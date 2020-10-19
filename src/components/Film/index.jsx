import {
  Box,
  Typography,
  Grid,
  Button,
  ButtonGroup,
  Container,
} from "@material-ui/core";
import { style } from "@material-ui/system";
import React, { Component } from "react";
import useStyles from "./style";
import Moment from "react-moment";

const logo = [
  "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
  "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png",
  "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png",
  "http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png",
  "http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png",
  "http://movie0706.cybersoft.edu.vn/hinhanh/megags.png",
];
const cinema = [
  {
    maCumRap: "bhd-star-cineplex-3-2",
    tenCumRap: "BHD Star Cineplex - 3/2",
    diaChi: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
    danhSachRap: [
      {
        maRap: 451,
        tenRap: "Rạp 1",
      },
      {
        maRap: 452,
        tenRap: "Rạp 2",
      },
      {
        maRap: 453,
        tenRap: "Rạp 3",
      },
      {
        maRap: 454,
        tenRap: "Rạp 4",
      },
      {
        maRap: 455,
        tenRap: "Rạp 5",
      },
      {
        maRap: 456,
        tenRap: "Rạp 6",
      },
      {
        maRap: 457,
        tenRap: "Rạp 7",
      },
      {
        maRap: 458,
        tenRap: "Rạp 8",
      },
      {
        maRap: 459,
        tenRap: "Rạp 9",
      },
      {
        maRap: 460,
        tenRap: "Rạp 10",
      },
    ],
  },
  {
    maCumRap: "bhd-star-cineplex-bitexco",
    tenCumRap: "BHD Star Cineplex - Bitexco",
    diaChi: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
    danhSachRap: [
      {
        maRap: 461,
        tenRap: "Rạp 1",
      },
      {
        maRap: 462,
        tenRap: "Rạp 2",
      },
      {
        maRap: 463,
        tenRap: "Rạp 3",
      },
      {
        maRap: 464,
        tenRap: "Rạp 4",
      },
      {
        maRap: 465,
        tenRap: "Rạp 5",
      },
      {
        maRap: 466,
        tenRap: "Rạp 6",
      },
      {
        maRap: 467,
        tenRap: "Rạp 7",
      },
      {
        maRap: 468,
        tenRap: "Rạp 8",
      },
      {
        maRap: 469,
        tenRap: "Rạp 9",
      },
      {
        maRap: 470,
        tenRap: "Rạp 10",
      },
    ],
  },
  {
    maCumRap: "bhd-star-cineplex-pham-hung",
    tenCumRap: "BHD Star Cineplex - Phạm Hùng",
    diaChi: "L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh",
    danhSachRap: [
      {
        maRap: 471,
        tenRap: "Rạp 1",
      },
      {
        maRap: 472,
        tenRap: "Rạp 2",
      },
      {
        maRap: 473,
        tenRap: "Rạp 3",
      },
      {
        maRap: 474,
        tenRap: "Rạp 4",
      },
      {
        maRap: 475,
        tenRap: "Rạp 5",
      },
      {
        maRap: 476,
        tenRap: "Rạp 6",
      },
      {
        maRap: 477,
        tenRap: "Rạp 7",
      },
      {
        maRap: 478,
        tenRap: "Rạp 8",
      },
      {
        maRap: 479,
        tenRap: "Rạp 9",
      },
      {
        maRap: 480,
        tenRap: "Rạp 10",
      },
    ],
  },
  {
    maCumRap: "bhd-star-cineplex-vincom-le-van-viet",
    tenCumRap: "BHD Star Cineplex - Vincom Lê Văn Việt",
    diaChi: "L4-Vincom Plaza, 50 Lê Văn Việt, Q.9",
    danhSachRap: [
      {
        maRap: 481,
        tenRap: "Rạp 1",
      },
      {
        maRap: 482,
        tenRap: "Rạp 2",
      },
      {
        maRap: 483,
        tenRap: "Rạp 3",
      },
      {
        maRap: 484,
        tenRap: "Rạp 4",
      },
      {
        maRap: 485,
        tenRap: "Rạp 5",
      },
      {
        maRap: 486,
        tenRap: "Rạp 6",
      },
      {
        maRap: 487,
        tenRap: "Rạp 7",
      },
      {
        maRap: 488,
        tenRap: "Rạp 8",
      },
      {
        maRap: 489,
        tenRap: "Rạp 9",
      },
      {
        maRap: 490,
        tenRap: "Rạp 10",
      },
    ],
  },
  {
    maCumRap: "bhd-star-cineplex-vincom-quang-trung",
    tenCumRap: "BHD Star Cineplex - Vincom Quang Trung",
    diaChi: "B1-Vincom QT, 190 Quang Trung, Gò Vấp",
    danhSachRap: [
      {
        maRap: 491,
        tenRap: "Rạp 1",
      },
      {
        maRap: 492,
        tenRap: "Rạp 2",
      },
      {
        maRap: 493,
        tenRap: "Rạp 3",
      },
      {
        maRap: 494,
        tenRap: "Rạp 4",
      },
      {
        maRap: 495,
        tenRap: "Rạp 5",
      },
      {
        maRap: 496,
        tenRap: "Rạp 6",
      },
      {
        maRap: 497,
        tenRap: "Rạp 7",
      },
      {
        maRap: 498,
        tenRap: "Rạp 8",
      },
      {
        maRap: 499,
        tenRap: "Rạp 9",
      },
      {
        maRap: 500,
        tenRap: "Rạp 10",
      },
    ],
  },
  {
    maCumRap: "bhd-star-cineplex-vincom-thao-dien",
    tenCumRap: "BHD Star Cineplex - Vincom Thảo Điền",
    diaChi: "L5-Megamall, 159 XL Hà Nội, Q.2",
    danhSachRap: [
      {
        maRap: 501,
        tenRap: "Rạp 1",
      },
      {
        maRap: 502,
        tenRap: "Rạp 2",
      },
      {
        maRap: 503,
        tenRap: "Rạp 3",
      },
      {
        maRap: 504,
        tenRap: "Rạp 4",
      },
      {
        maRap: 505,
        tenRap: "Rạp 5",
      },
      {
        maRap: 506,
        tenRap: "Rạp 6",
      },
      {
        maRap: 507,
        tenRap: "Rạp 7",
      },
      {
        maRap: 508,
        tenRap: "Rạp 8",
      },
      {
        maRap: 509,
        tenRap: "Rạp 9",
      },
      {
        maRap: 510,
        tenRap: "Rạp 10",
      },
    ],
  },
];
const schedule = [
  {
    lstCumRap: [
      {
        danhSachPhim: [
          {
            lstLichChieuTheoPhim: [
              {
                maLichChieu: 29859,
                maRap: "721",
                tenRap: "Rạp 1",
                ngayChieuGioChieu: "2019-01-09T14:10:00",
                giaVe: 75000,
              },
              {
                maichChiu: 29860,
                maap: "72",
                teRap: "Rp 1",
                ngayChieuGioChieu: "2019-01-09T16:10:00",
                giaVe: 75000,
              },
              {
                maichChiu: 29861,
                maap: "72",
                teRap: "Rp 1",
                ngayChieuGioChieu: "2019-01-09T18:10:00",
                giaVe: 75000,
              },
              {
                maichChiu: 29862,
                maap: "72",
                teRap: "Rp 1",
                ngayChieuGioChieu: "2019-01-09T20:10:00",
                giaVe: 75000,
              },
            ],
            maPhim: 1296,
            tenPhim: "Avengers: Infinity War ",
            hinhAnh:
              "http://movie0706.cybersoft.edu.vn/hinhanh/avengers-infinity-war.jpg",
          },
          {
            lstLichChieuTheoPhim: [
              {
                maLichChieu: 29915,
                maRap: "722",
                tenRap: "Rạp 2",
                ngayChieuGioChieu: "2019-01-09T18:10:00",
                giaVe: 75000,
              },
              {
                maichChiu: 29916,
                maap: "72",
                teRap: "Rp 2",
                ngayChieuGioChieu: "2019-01-09T20:10:00",
                giaVe: 75000,
              },
            ],
            maPhim: 1297,
            tenPhim: "Avengers: Infinity War ",
            hinhAnh:
              "http://movie0706.cybersoft.edu.vn/hinhanh/avengers-infinity-war.jpg",
          },
        ],
        maCumRap: "cns-hai-ba-trung",
        tenCumRap: "CNS - Hai Bà Trưng",
        diaChi: "135 Hai Bà Trưng, Bến Nghé, Q.1[Bản đồ]",
      },
    ],
    maHeThongRap: "CineStar",
    tenHeThongRap: "CineStar",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png",
    mahom: "GP00",
  },
];

const CinemaLogo = (logo) => {
  const styles = useStyles();
  return (
    <ButtonGroup
      orientation="vertical"
      color="secondary"
      aria-label="vertical outlined primary button group"
      variant="text"
    >
      {logo.map((logo, index) => (
        <Button className={styles.logo} key={index}>
          <img className="img" src={logo} />
        </Button>
      ))}
    </ButtonGroup>
  );
};

const CinemaList = (cinemaList) => {
  const styles = useStyles();
  //console.log(cinemaList);
  return (
    <ButtonGroup
      orientation="vertical"
      color="secondary"
      aria-label="vertical outlined primary button group"
      variant="text"
      fullWidth
    >
      {cinemaList.map((cinema, index) => (
        <Button className={styles.cinemaList} key={index}>
          <Container>
            <Typography className={styles.title}>{cinema.tenCumRap}</Typography>
            <Typography className={styles.address}>{cinema.diaChi}</Typography>
          </Container>
        </Button>
      ))}
    </ButtonGroup>
  );
};

const Time = (time) => {
  const styles = useStyles();
  return time.map((item, index) => (
    
      <Button
        className={styles.time}
        key={index}
        variant="outlined"
      >
        <Moment format="HH:MM">{item.ngayChieuGioChieu}</Moment>
      </Button>

  ));
};

const Schedule = (sche) => {
  const styles = useStyles();
  console.log(sche[0].lstCumRap[0].danhSachPhim);
  return (
  
      <ButtonGroup
        orientation="vertical"
        color="secondary"
        aria-label="vertical outlined primary button group"
        variant="text"
        fullWidth
      >
        {
          // console.log(sche[0].lstCumRap[0].danhSachPhim.length)
          sche[0].lstCumRap[0].danhSachPhim.map((item, index) => (
            <Button className={styles.movieDetail} key={index} fullWidth>
              <Box>
                <Grid container>
                  <Grid item xs={4}>
                    <img className={styles.img} src={item.hinhAnh} />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography className="title">{item.tenPhim}</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box textAlign='left'>{Time(item.lstLichChieuTheoPhim)}</Box>
            </Button>
          ))
          //  console.log(sche[0].lstCumRap[0].danhSachPhim)
        }
      </ButtonGroup>

  );
};

const Film = (props) => {
    const styles=useStyles()
  return (
    <Box className={styles.container} my={5} mx={2} border="1px solid grey">
      <Typography component="h4" variant="h4"></Typography>
      <Grid container>
        <Grid item xs={12} md={1}>
          {CinemaLogo(logo)}
        </Grid>
        <Grid item xs={12} md={5}>
          {CinemaList(cinema)}
        </Grid>
        <Grid item xs={12} md={6}>
          {Schedule(schedule)}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Film;
