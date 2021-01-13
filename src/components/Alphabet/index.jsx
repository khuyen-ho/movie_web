import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./style";

const Alphabet = ({ index }) => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Typography component="span" className={styles.letter}>
        {String.fromCharCode(65 + index)} {/* 65 == "A" */}
      </Typography>
    </Box>
  );
};

Alphabet.propTypes = {
  index: PropTypes.number,
};

Alphabet.defaultProps = {
  index: 0,
};

export default Alphabet;
