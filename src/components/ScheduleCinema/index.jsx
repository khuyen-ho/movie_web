import React from "react";
import { Container, Grid, List } from "@material-ui/core";
import CinemaSystemList from "../CinemaSystemList";
import CinemaInfoList from "../CinemaInfoList";
import CinemaShowTimeList from "../CinemaShowTimeList";
import useStyles from "./style";

const cinemaSystemList = [
  {
    id: "BHDStar",
    name: "BHD Star Cineplex",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
  },
  {
    id: "CGV",
    name: "CGV",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png",
  },
  {
    id: "CineStar",
    name: "CineStar",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png",
  },
  {
    id: "Galaxy",
    name: "Galaxy Cinema",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png",
  },
  {
    id: "LotteCinima",
    name: "Lotte Cinema",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png",
  },
  {
    id: "MegaGS",
    name: "MegaGS",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/megags.png",
  },
];

const cinemaList = [
  {
    id: "bhd-star-cineplex-3-2",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
    name: "BHD Star Cineplex - 3/2",
    address: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
  },
  {
    id: "bhd-star-cineplex-bitexco",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
    name: "BHD Star Cineplex - Bitexco",
    address: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
  },
  {
    id: "bhd-star-cineplex-pham-hung",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
    name: "BHD Star Cineplex - Phạm Hùng",
    address: "L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh",
  },
  {
    id: "bhd-star-cineplex-vincom-le-van-viet",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
    name: "BHD Star Cineplex - Vincom Lê Văn Việt",
    address: "L4-Vincom Plaza, 50 Lê Văn Việt, Q.9",
  },
  {
    id: "bhd-star-cineplex-vincom-quang-trung",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
    name: "BHD Star Cineplex - Vincom Quang Trung",
    address: "B1-Vincom QT, 190 Quang Trung, Gò Vấp",
  },
  {
    id: "bhd-star-cineplex-vincom-thao-dien",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
    name: "BHD Star Cineplex - Vincom Thảo Điền",
    address: "L5-Megamall, 159 XL Hà Nội, Q.2",
  },
];

const showTimeList = [
  {
    movieInfo: {
      id: 1283,
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/trainwreck.jpg",
      name: "Trainwreck",
      duration: 100,
      score: 5.2,
    },
    showTimes: [
      {
        start: "2019-01-01T08:15:00",
        duration: 100,
      },
      {
        start: "2019-01-01T11:00:00",
        duration: 100,
      },
      {
        start: "2019-01-01T12:30:00",
        duration: 100,
      },
      {
        start: "2019-01-01T15:50:00",
        duration: 100,
      },
      {
        start: "2019-01-01T18:30:00",
        duration: 100,
      },
    ],
  },
  {
    movieInfo: {
      id: 1284,
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/insideout.jpg",
      name: "Inside Out",
      duration: 90,
      score: 7.8,
    },
    showTimes: [
      {
        start: "2019-01-01T02:20:00",
        duration: 90,
      },
      {
        start: "2019-01-01T11:30:00",
        duration: 90,
      },
      {
        start: "2019-01-01T17:40:00",
        duration: 90,
      },
      {
        start: "2019-01-01T21:45:00",
        duration: 90,
      },
    ],
  },
  {
    movieInfo: {
      id: 1285,
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/home.jpg",
      name: "Home",
      duration: 125,
      score: 9.5,
    },
    showTimes: [
      {
        start: "2019-01-01T09:15:00",
        duration: 125,
      },
      {
        start: "2019-01-01T12:35:00",
        duration: 125,
      },
      {
        start: "2019-01-01T17:50:00",
        duration: 125,
      },
    ],
  },
  {
    movieInfo: {
      id: 1286,
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/batmanvssuperman.jpg",
      name: "Batman v Superman: Dawn of Justice",
      duration: 180,
      score: 8.3,
    },
    showTimes: [
      {
        start: "2019-01-01T10:10:00",
        duration: 180,
      },
      {
        start: "2019-01-01T11:30:00",
        duration: 180,
      },
      {
        start: "2019-01-01T15:40:00",
        duration: 180,
      },
    ],
  },
  {
    movieInfo: {
      id: 1287,
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/antman.jpg",
      name: "Ant-Man",
      duration: 180,
      score: 10.0,
    },
    showTimes: [
      {
        start: "2019-01-01T12:10:00",
        duration: 180,
      },
      {
        start: "2019-01-01T20:30:00",
        duration: 180,
      },
      {
        start: "2019-01-01T21:45:00",
        duration: 180,
      },
      {
        start: "2019-01-01T22:50:00",
        duration: 180,
      },
    ],
  },
];

const ScheduleCinema = (props) => {
  const styles = useStyles();
  return (
    <Container maxWidth="lg" className={styles.container}>
      <Grid container className={styles.bigScreen}>
        <Grid item xs={1}>
          <List
            className={`${styles.list} 
              ${styles.smallPadding}
              ${styles.noTopRightRadius}
              ${styles.noBottomRightRadius}`}
          >
            <CinemaSystemList list={cinemaSystemList} />
          </List>
        </Grid>
        <Grid item xs={4}>
          <List
            className={`${styles.list} 
              ${styles.noTopLeftRadius} 
              ${styles.noBottomLeftRadius}
              ${styles.noTopRightRadius} 
              ${styles.noBottomRightRadius}`}
          >
            <CinemaInfoList list={cinemaList} />
          </List>
        </Grid>
        <Grid item xs={7}>
          <List
            className={`${styles.list} 
              ${styles.noTopLeftRadius} 
              ${styles.noBottomLeftRadius} 
              ${styles.verticalScroll}`}
          >
            <CinemaShowTimeList list={showTimeList} />
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ScheduleCinema;
