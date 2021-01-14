import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Typography } from "@material-ui/core";
import useStyles from "./style";
import { Link, NavLink } from "react-router-dom";

const CinemaInfo = ({ id, logo, name, address, hasInfo, ...props }) => {
  const styles = useStyles(props);

  return (
    <>
      <Avatar src={logo} variant="square" className={styles.logo} />
      {hasInfo && (
        <NavLink className={styles.root} to="/cinemaDetail">
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
            {props.hasDetailLink && (
              <Link
                to="/cinemaDetail"
                className={styles.detail}
                variant="body2"
              >
                [chi tiết]
              </Link>
            )}
          </Box>
        </NavLink>
      )}
    </>
  );
};

CinemaInfo.propTypes = {
  id: PropTypes.string,
  logo: PropTypes.string,
  name: PropTypes.string,
  address: PropTypes.string,
  hasEllipsis: PropTypes.bool,
  hasDetailLink: PropTypes.bool,
  hasInfo: PropTypes.bool,
};

export default CinemaInfo;
