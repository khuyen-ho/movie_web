import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { GET_ID_CINEMA_SYSTEM } from "../../redux/actions/actionType";
import { List, ListItem } from "@material-ui/core";
import CinemaLogo from "../CinemaLogo";
import useStyles from "./style";

const CinemaLogoList = ({ list }) => {
  const styles = useStyles();
  const selectedSystem = useSelector((state) => state.idCinemaSystem);
  const dispatch = useDispatch();

  return (
    <List className={styles.root}>
      {list.map((system, index) => (
        <ListItem
          className={styles.item}
          button
          classes={{ selected: styles.selected }}
          selected={selectedSystem === system.id}
          onclick={() => {
            dispatch({ type: GET_ID_CINEMA_SYSTEM, payload: system.id });
          }}
        >
          <CinemaLogo {...system} key={index} />
        </ListItem>
      ))}
    </List>
  );
};

CinemaLogoList.propTypes = {
  list: PropTypes.array,
};

CinemaLogoList.defaultProps = {
  list: [
    {
      id: "BHDStar",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
    },
    {
      id: "CGV",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png",
    },
    {
      id: "CineStar",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png",
    },
    {
      id: "Galaxy",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png",
    },
    {
      id: "LotteCinima",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png",
    },
    {
      id: "MegaGS",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/megags.png",
    },
  ],
};

export default CinemaLogoList;
