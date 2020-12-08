import React from "react";
import { Box, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import useStyles from "./style";

const Date = ({ day, date }) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Typography variant="subtitle1" component="p" className={styles.text}>
        {day}
      </Typography>
      <Typography variant="h6" component="p" className={styles.text}>
        {date}
      </Typography>
    </Box>
  );
};

Date.propTypes = {
  day: PropTypes.string,
  date: PropTypes.string,
};

Date.defaultProps = {
  day: "Thứ 3",
  date: "08",
};

export default Date;
