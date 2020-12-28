import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { ListItem } from "@material-ui/core";
import { GET_ID_CINEMA } from "../../redux/actions/actionType";
import Show from "../Show";
import CinemaInfo from "../CinemaInfo";
import useStyles from "./style";

const CinemaInfoList = ({ list }) => {
  const selectedCinema = useSelector((state) => state.idCinema);
  const dispatch = useDispatch();
  const styles = useStyles();

  return list.map((cinema) => (
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

CinemaInfoList.propTypes = {
  list: PropTypes.array,
};

CinemaInfoList.defaultProps = {
  list: [],
};

export default CinemaInfoList;
