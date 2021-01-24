import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Typography } from "@material-ui/core";
import useStyles from "./style";
import { useSelector } from "react-redux";

const CinemaInfo = ({ cinema, hasInfo, ...props }) => {
  const styles = useStyles(props);
  const logo = useSelector((state) => state.cinemaSystems.selectedLogo);

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
            {cinema.tenCumRap}
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            className={`${styles.address} ${styles.ellipsis}`}
          >
            {cinema.diaChi}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

CinemaInfo.propTypes = {
  cinema: PropTypes.object,
  hasEllipsis: PropTypes.bool,
  hasInfo: PropTypes.bool,
};

CinemaInfo.defaultProps = {
  cinema: {},
  hasEllipsis: false,
  hasInfo: false,
};

export default CinemaInfo;
