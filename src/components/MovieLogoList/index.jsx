import {
  Box,
  Typography,
  Button,
  ButtonGroup,
  ListItem,
  ListItemIcon,
  Collapse,
  List,
} from "@material-ui/core";
import React, { Component } from "react";
import useStyles, { CssList } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { GET_ID_CINEMA } from "../../redux/actions/actionType";
import ShowTime from "../ShowTimes";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { getCinemaDetailList } from "../../redux/actions/movieAction";

const cinemaList = [
  {
    maHeThongRap: "BHDStar",
    tenHeThongRap: "BHD Star Cineplex",
    biDanh: "bhd-star-cineplex",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
  },
  {
    maHeThongRap: "CGV",
    tenHeThongRap: "cgv",
    biDanh: "cgv",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png",
  },
  {
    maHeThongRap: "CineStar",
    tenHeThongRap: "CineStar",
    biDanh: "cinestar",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png",
  },
  {
    maHeThongRap: "Galaxy",
    tenHeThongRap: "Galaxy Cinema",
    biDanh: "galaxy-cinema",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png",
  },
  {
    maHeThongRap: "LotteCinima",
    tenHeThongRap: "Lotte Cinema",
    biDanh: "lotte-cinema",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png",
  },
  {
    maHeThongRap: "MegaGS",
    tenHeThongRap: "MegaGS",
    biDanh: "megags",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/megags.png",
  },
];

//CinemaLogo version 1 - no responsive
// const CinemaLogo = (cinemaList) => {
//   const styles = useStyles();
//   const idCinema = useSelector((state) => state.idCinema);
//   //click to change to another cinema
//   const dispatch = useDispatch();

//   return (
//     <ButtonGroup
//       orientation="vertical"
//       color="secondary"
//       aria-label="vertical contained primary button group"
//       variant="text"
//     >
//       {cinemaList.map((item, index) => (
//         <><Button
//           className={styles.logo}
//           key={index}
//           onClick={() => dispatch({type: GET_ID_CINEMA,
//             payload: item.maHeThongRap})}
//         >
//           <img className="img" src={item.logo} />
//         </Button>
//        </>
//       ))}
//       {/* {console.log(dispatch)} */}
//     </ButtonGroup>
//   );
// };

//CinemaLogo version 2 - responsive with Link and Collapse
const CinemaLogo = (cinemaList) => {
  const styles = useStyles();
  const idCinema = useSelector((state) => state.idCinema);
  //click to change to another cinema
  const dispatch = useDispatch();
  //open/close Collapse
  const [openArr = [], setOpen] = React.useState([]);
  for (let i = 0; i < cinemaList.length; i++) {
    let temp = false;
    openArr.push(temp);
  }
  const handleClick = (idx) => {
    let newArr = [...openArr];
    newArr[idx] = !newArr[idx];
    setOpen(newArr);
  };
  return (
    <div onClick={dispatch(getCinemaDetailList(idCinema))}>
      {cinemaList.map((item, index) => (
        <CssList
          key={index}
          onClick={() =>
            dispatch({ type: GET_ID_CINEMA, payload: item.maHeThongRap })
          }
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItem
            button
            onClick={() => handleClick(index)}
            className={styles.logo}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              width="100%"
              alignItems="center"
            >
              <ListItemIcon>
                <img className="img" src={item.logo} />
              </ListItemIcon>
              <div className={styles.smallScreen}>
                {openArr[index] ? <ExpandLess /> : <ExpandMore />}
              </div>
            </Box>
          </ListItem>
          <div className={styles.smallScreen}>
            {item.maHeThongRap === idCinema && (
              <Collapse in={openArr[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem>
                    <ShowTime />
                  </ListItem>
                </List>
              </Collapse>
            )}
          </div>
        </CssList>
      ))}
    </div>
  );
};
const MovieLogoList = (props) => {
  const styles = useStyles();

  return (
    <Box className={styles.container} my={5} mx={2}>
      {CinemaLogo(cinemaList)}
    </Box>
  );
};

export default MovieLogoList;
