import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_ID_CINEMA } from "../../redux/actions/actionType";
import PropTypes from "prop-types";
import { ListItem, ListItemIcon } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import useStyles from "./style";

const CinemaLogo = ({ id, logo }) => {
  const styles = useStyles();
  const selectedSystem = useSelector((state) => state.idCinema);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: GET_ID_CINEMA, payload: id });
  };

  return (
    <ListItem
      button
      className={styles.root}
      classes={{ selected: styles.selected }}
      selected={selectedSystem === id}
      onClick={() => handleClick()}
    >
      <ListItemIcon>
        <Avatar src={logo} variant="square" className={styles.logo} />
      </ListItemIcon>
    </ListItem>
  );
};

CinemaLogo.propTypes = {
  id: PropTypes.string,
  logo: PropTypes.string,
};

CinemaLogo.defaultProps = {
  id: "BHDStar",
  logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
  name: "BHD Star Cineplex",
};

export default CinemaLogo;
