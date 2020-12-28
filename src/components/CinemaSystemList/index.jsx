import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { GET_ID_CINEMA_SYSTEM } from "../../redux/actions/actionType";
import { ListItem } from "@material-ui/core";
import Show from "../Show";
import CinemaSystem from "../CinemaSystem";
import useStyles from "./style";

const CinemaSystemList = ({ list }) => {
  const styles = useStyles();
  const selectedSystem = useSelector((state) => state.idCinemaSystem);
  const dispatch = useDispatch();

  return list.map((system) => (
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
      <Show info={<CinemaSystem {...system} />} />
    </ListItem>
  ));
};

CinemaSystemList.propTypes = {
  list: PropTypes.array,
};

CinemaSystemList.defaultProps = {
  list: [],
};

export default CinemaSystemList;
