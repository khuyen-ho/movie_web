import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Typography } from "@material-ui/core";
import useStyles from "./style";

const CinemaInfo = ({ id, logo, name, address, ...props }) => {
  const styles = useStyles(props);

  return (
    <>
      <Avatar src={logo} variant="square" className={styles.logo} />
      <Box>
        <Typography
          variant="subtitle2"
          component="p"
          className={`${styles.name} ${styles.ellipsis}`}
        >
          {name}
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          className={`${styles.address} ${styles.ellipsis}`}
        >
          {address}
        </Typography>
      </Box>
    </>
  );
};

CinemaInfo.propTypes = {
  id: PropTypes.string,
  logo: PropTypes.string,
  name: PropTypes.string,
  address: PropTypes.string,
  hasEllipsis: PropTypes.bool,
};

export default CinemaInfo;
