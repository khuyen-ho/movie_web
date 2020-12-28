import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Collapse, Typography } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./style";

const ShowTime = ({ info, showlist, hasOpenIcon }) => {
  const styles = useStyles();
  const [open, setOpen] = useState(true);

  return (
    <Box className={styles.root}>
      <Box className={styles.desc} onClick={() => setOpen(!open)}>
        <Box className={styles.info}>{info}</Box>
        {hasOpenIcon && (
          <Box className={styles.openIcon}>
            {open ? <NavigateNextIcon /> : <ExpandMoreIcon />}
          </Box>
        )}
      </Box>

      {showlist && (
        <Collapse in={open} timeout="auto">
          {showlist}
        </Collapse>
      )}
    </Box>
  );
};

ShowTime.propTypes = {
  info: PropTypes.element,
  showlist: PropTypes.element,
  hasOpenIcon: PropTypes.bool,
};

ShowTime.defaultProps = {
  info: <Typography>No info</Typography>,
  hasOpenIcon: false,
};

export default ShowTime;
