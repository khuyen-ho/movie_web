import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { GET_ID_CINEMA_SYSTEM } from "../../redux/actions/actionType";
import { ListItem } from "@material-ui/core";
import Show from "../Show";
import CinemaSystem from "../CinemaSystem";
import useStyles from "./style";

const CinemaSystemList = ({ showList, ...props }) => {
  const styles = useStyles();
  const systemList = useSelector((state) => state.cinemaSystems.list);
  const selectedSystem = useSelector((state) => state.cinemaSystems.selected);
  const dispatch = useDispatch();

  const handleClick = (id, logo) => {
    dispatch({ type: GET_ID_CINEMA_SYSTEM, payload: id,logo });
  };

  return systemList.map((system) => (
    <ListItem
      className={styles.listItem}
      classes={{ selected: styles.selected }}
      button
      selected={selectedSystem === system.id}
      onClick={() => handleClick(system.id, system.logo)}
      key={system.id}
    >
      <Show
        hasOpenIcon
        info={<CinemaSystem {...system} hasName={props.hasName} />}
        showList={showList}
      />
    </ListItem>
  ));
};

CinemaSystemList.propTypes = {
  showList: PropTypes.element,
};

export default CinemaSystemList;
