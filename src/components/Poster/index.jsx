import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  IconButton,
  Box,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import ReactPlayer from "react-player/lazy";
import useStyles from "./style";

const Poster = (props) => {
  const styles = useStyles(props);
  const { image, trailer } = props;
  const [open, setopen] = useState(false);

  return (
    <Box className={styles.root}>
      <img src={image} alt="img" className={styles.image} />
      <Box className={styles.overlay}>
        <IconButton
          classes={{ root: styles.play }}
          onClick={() => setopen(true)}
        >
          <PlayCircleOutlineIcon classes={{ root: styles.playIcon }} />
        </IconButton>
      </Box>

      <Modal
        aria-labelledby="trailer-modal-title"
        aria-describedby="trailer-modal-description"
        className={styles.trailer}
        open={open}
        onClose={() => setopen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 10,
        }}
      >
        <Fade in={open}>
          <Box className={styles.wrapper}>
            <ReactPlayer
              className={styles.player}
              playing
              url={trailer}
              width="100%"
              height="100%"
            />
            <Button
              className={styles.closeButton}
              onClick={() => setopen(false)}
            >
              <img
                src="./images/close.png"
                alt="close"
                className={styles.closeIcon}
              />
            </Button>
          </Box>
        </Fade>
      </Modal>
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
