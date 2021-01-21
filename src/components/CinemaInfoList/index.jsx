import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { ListItem } from "@material-ui/core";
import { GET_ID_CINEMA } from "../../redux/actions/actionType";
import Show from "../Show";
import CinemaInfo from "../CinemaInfo";
import useStyles from "./style";

const CinemaInfoList = (props) => {
  const cinemaList = useSelector((state) => state.cinema.list);
  const selectedCinema = useSelector((state) => state.cinema.selected);
  const dispatch = useDispatch();
  const styles = useStyles(props);

  const handleClick = (id) => {
    dispatch({ type: GET_ID_CINEMA, payload: id });
  };

  return cinemaList.map((cinema) => (
    <ListItem
      className={styles.listItem}
      classes={{ selected: styles.selected }}
      button
      selected={selectedCinema === cinema.id}
      onClick={() => handleClick(cinema.id)}
      key={cinema.id}
    >
      <Show
        info={
          <CinemaInfo
            {...cinema}
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
