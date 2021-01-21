import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import useStyles from "./style";

const BackToTop = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);
  const styles = useStyles();

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  const handleClick = () => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };

  return (
    <Box className={styles.root}>
      {show && (
        <IconButton className={styles.toTop} onClick={handleClick}>
          <ArrowUpwardIcon fontSize="large" />
        </IconButton>
      )}
    </Box>
  );
};

export default BackToTop;
