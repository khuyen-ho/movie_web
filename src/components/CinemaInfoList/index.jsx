import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { ListItem } from "@material-ui/core";
import { GET_ID_CINEMA } from "../../redux/actions/actionType";
import Show from "../Show";
import CinemaInfo from "../CinemaInfo";
import useStyles from "./style";
import { getCinemaInfo } from "../../redux/actions/cinemaAction";

const CinemaInfoList = (props) => {
  const selectedCinema = useSelector((state) => state.cinemas.selected);
  const selectedCinemaSystem = useSelector((state) => state.cinemaSystems);
  const dispatch = useDispatch();
  const styles = useStyles(props);

  useEffect(() => {
    //  console.log(selectedCinemaSystem.id);
    dispatch(getCinemaInfo(selectedCinemaSystem.selected,selectedCinemaSystem.logo));
  }, [selectedCinemaSystem]);

  const cinemaList = useSelector((state) => state.cinemas.list);

  const handleClick = (id) => {
    //console.log(id);
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
