import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { ListItem } from "@material-ui/core";
import { GET_ID_CINEMA } from "../../redux/actions/actionType";
import Show from "../Show";
import CinemaInfo from "../CinemaInfo";
import useStyles from "./style";

const CinemaInfoList = (props) => {
  const selectedCinema = useSelector((state) => state.cinemas.selected);
  const dispatch = useDispatch();
  const styles = useStyles(props);

  const handleClick = (id) => {
    dispatch({ type: GET_ID_CINEMA, payload: id });
  };

  return props.list.map((cinema) => (
    <ListItem
      className={styles.listItem}
      classes={{ selected: styles.selected }}
      button
      selected={selectedCinema === cinema.maCumRap}
      onClick={() => handleClick(cinema.maCumRap)}
      key={cinema.maCumRap}
    >
      <Show
        info={
          <CinemaInfo
            cinema={cinema}
            hasEllipsis={props.hasEllipsis}
            hasDetailLink={props.hasDetailLink}
            hasInfo
          />
        }
      />
    </ListItem>
  ));
};

CinemaInfoList.propTypes = {
  hasEllipsis: PropTypes.bool,
  hasDetailLink: PropTypes.bool,
};

export default CinemaInfoList;
