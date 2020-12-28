import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Grid, List, ListItem } from "@material-ui/core";
import {
  GET_ID_CINEMA_SYSTEM,
  GET_ID_CINEMA,
} from "../../redux/actions/actionType";
import Show from "../Show";
import CinemaSystem from "../CinemaSystem";
import CinemaInfo from "../CinemaInfo";
import MovieInfo from "../MovieInfo";
import StartTimeList from "../StartTimeList";
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

const cinemalist = [
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

const ScheduleCinema = (props) => {
  const styles = useStyles();
  const selectedSystem = useSelector((state) => state.idCinemaSystem);
  const selectedCinema = useSelector((state) => state.idCinema);
  const dispatch = useDispatch();

  const renderCinemaSystems = () => {
    return cinemaSystemList.map((system) => (
      <ListItem
        className={`${styles.listItem} ${styles.fade}`}
        classes={styles.selected}
        button
        selected={selectedSystem === system.id}
        onclick={() => {
          dispatch({ type: GET_ID_CINEMA_SYSTEM, payload: system.id });
        }}
        key={system.id}
      >
        <Show info={<CinemaSystem {...system} key={system.id} />} />
      </ListItem>
    ));
  };

  const renderCinemaInfo = () => {
    return cinemalist.map((cinema) => (
      <ListItem
        className={`${styles.listItem} ${styles.fade}`}
        classes={styles.selected}
        button
        selected={selectedCinema === cinema.id}
        onclick={() => {
          dispatch({ type: GET_ID_CINEMA, payload: cinema.id });
        }}
        key={cinema.id}
      >
        <Show info={<CinemaInfo {...cinema} />} />
      </ListItem>
    ));
  };

  const renderShowTimes = () => {
    const list = [];
    for (let i = 0; i < 4; i++) {
      list.push(
        <ListItem disableGutters className={styles.listItem} key={i}>
          <Show info={<MovieInfo />} showlist={<StartTimeList />} />
        </ListItem>
      );
    }
    return list;
  };

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
            {renderCinemaSystems()}
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
            {renderCinemaInfo()}
          </List>
        </Grid>
        <Grid item xs={7}>
          <List
            className={`${styles.list} 
              ${styles.noTopLeftRadius} 
              ${styles.noBottomLeftRadius} 
              ${styles.verticalScroll}`}
          >
            {renderShowTimes()}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ScheduleCinema;
