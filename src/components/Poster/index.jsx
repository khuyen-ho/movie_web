import React from "react";
import PropTypes from "prop-types";
import { IconButton, Box } from "@material-ui/core";
import useStyles from "./style";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const Poster = (props) => {
  const styles = useStyles(props);
  const { image } = props;

  return (
    <Box className={styles.root}>
      <img src={image} alt="img" className={styles.image} />
      <Box className={styles.overlay}>
        <IconButton classes={{ root: styles.play }}>
          <PlayCircleOutlineIcon classes={{ root: styles.playIcon }} />
        </IconButton>
      </Box>
    </Box>
  );
};

Poster.propTypes = {
  layoutBackground: PropTypes.bool,
  shadowColor: PropTypes.string,
  layoutColor: PropTypes.string,
};

Poster.defaultProps = {
  width: "100%",
  layoutBackground: true,
  shadowColor: "#3c3b37",
  layoutColor: "#3c3b37",
};

export default Poster;
