import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { List, ListItem } from "@material-ui/core";
import { GET_ID_CINEMA } from "../../redux/actions/actionType";
import CinemaInfo from "../CinemaInfo";
import useStyles from "./style";

const CinemaInfoList = ({ list }) => {
  const selectedCinema = useSelector((state) => state.idCinema);
  const dispatch = useDispatch();
  const styles = useStyles();

  return (
    <List className={styles.root}>
      {list.map((cinema) => (
        <ListItem
          className={styles.item}
          classes={styles.selected}
          button
          selected={selectedCinema === cinema.id}
          onclick={() => {
            dispatch({ type: GET_ID_CINEMA, payload: cinema.id });
          }}
        >
          <CinemaInfo {...cinema} key={cinema.id} />
        </ListItem>
      ))}
    </List>
  );
};

CinemaInfoList.propTypes = {
  list: PropTypes.array,
};

CinemaInfoList.defaultProps = {
  list: [
    {
      id: "bhd-star-cineplex-3-2",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
      name: "BHD Star Cineplex - 3/2",
      address: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
    },
    {
      id: "bhd-star-cineplex-3-2",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
      name: "BHD Star Cineplex - 3/2",
      address: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
    },
    {
      id: "bhd-star-cineplex-3-2",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
      name: "BHD Star Cineplex - 3/2",
      address: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
    },
    {
      id: "bhd-star-cineplex-3-2",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
      name: "BHD Star Cineplex - 3/2",
      address: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
    },
    {
      id: "bhd-star-cineplex-3-2",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
      name: "BHD Star Cineplex - 3/2",
      address: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
    },
    {
      id: "bhd-star-cineplex-3-2",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
      name: "BHD Star Cineplex - 3/2",
      address: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
    },
  ],
};

export default CinemaInfoList;
