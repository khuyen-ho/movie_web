import { IconButton, Box } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const Trailer = ({ trailer, image }) => {
  const styles = useStyles();
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

export default Trailer;
