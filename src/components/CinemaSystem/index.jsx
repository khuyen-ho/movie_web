import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_ID_CINEMA } from "../../redux/actions/actionType";
import PropTypes from "prop-types";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Avatar, Typography } from "@material-ui/core";
import useStyles from "./style";

const CinemaSystem = ({ id, logo, name }) => {
  const styles = useStyles();
  const selectedSystem = useSelector((state) => state.idCinema);
  const dispatch = useDispatch();

  return (
    <ListItem
      button
      className={styles.root}
      classes={{ selected: styles.selected }}
      selected={selectedSystem === id}
      onClick={() => dispatch({ type: GET_ID_CINEMA, payload: id })}
    >
      <ListItemIcon>
        <Avatar src={logo} variant="square" className={styles.logo} />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography variant="subtitle2" component="p" className={styles.name}>
            {name}
          </Typography>
        }
      />
    </ListItem>
  );
};

CinemaSystem.propTypes = {
  id: PropTypes.string,
  logo: PropTypes.string,
  name: PropTypes.string,
};

CinemaSystem.defaultProps = {
  id: "BHDStar",
  logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
  name: "BHD Star Cineplex",
};

export default CinemaSystem;
