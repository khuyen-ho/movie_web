import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Collapse, Typography } from "@material-ui/core";
import useStyles from "./style";

const ShowTime = ({ info, showlist }) => {
  const styles = useStyles();
  const [open, setOpen] = useState(true);

  return (
    <Box className={styles.root}>
      <Box className={styles.movieInfo} onClick={() => setOpen(!open)}>
        {info}
      </Box>
      <Collapse in={open} timeout="auto">
        {showlist}
      </Collapse>
    </Box>
  );
};

ShowTime.propTypes = {
  info: PropTypes.element,
  showlist: PropTypes.element,
};

ShowTime.defaultProps = {
  info: <Typography>No info</Typography>,
  showlist: <Typography>Nothing to show</Typography>,
};

export default ShowTime;
