import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
  GET_ID_CINEMA_SYSTEM,
  GET_ID_CINEMA,
} from "../../redux/actions/actionType";
import { ListItem } from "@material-ui/core";
import Show from "../Show";
import CinemaSystem from "../CinemaSystem";
import useStyles from "./style";

const CinemaSystemList = ({
  systemList,
  defaultCinema,
  showList,
  ...props
}) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const selectedSystem = useSelector((state) => state.cinemaSystems.selected);

  useEffect(() => {
    dispatch({ type: GET_ID_CINEMA, payload: defaultCinema.maCumRap });
  }, [defaultCinema.maCumRap, dispatch]);

  const handleClick = (id, logo) => {
    dispatch({
      type: GET_ID_CINEMA_SYSTEM,
      payload: { id: id, logo: logo },
    });
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
  systemList: PropTypes.array,
  defaultCinema: PropTypes.object,
  showList: PropTypes.element,
};

CinemaSystemList.defaultProps = {
  defaultCinema: {},
  systemList: [],
};

export default CinemaSystemList;
