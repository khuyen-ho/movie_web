import React from "react";
import { Typography, Box } from "@material-ui/core";
import PropTypes from "prop-types";
import useStyles from "./style";

const Date = ({ date }) => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Typography variant="subtitle1" component="p" className={styles.text}>
        {date}
      </Typography>
    </Box>
  );
};

Date.propTypes = {
  date: PropTypes.string,
};

Date.defaultProps = {
  date: "No date",
};

export default Date;
