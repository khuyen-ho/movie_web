import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Typography } from "@material-ui/core";
import useStyles from "./style";
import { useSelector } from "react-redux";

const CinemaInfo = (props) => {
  const styles = useStyles(props);
  const logo = useSelector((state) => state.cinemaSystems.selectedLogo);
  const { info, hasInfo } = props;

  return (
    <Box className={styles.root}>
      <Avatar src={logo} variant="square" className={styles.logo} />
      {hasInfo && (
        <Box>
          <Typography
            variant="subtitle2"
            component="p"
            className={`${styles.name} ${styles.ellipsis}`}
          >
            {info.name}
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            className={`${styles.address} ${styles.ellipsis}`}
          >
            {info.address}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

CinemaInfo.propTypes = {
  info: PropTypes.object,
  hasEllipsis: PropTypes.bool,
  hasInfo: PropTypes.bool,
};

export default CinemaInfo;
