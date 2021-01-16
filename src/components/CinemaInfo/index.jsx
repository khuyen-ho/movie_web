import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Typography } from "@material-ui/core";
import useStyles from "./style";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const CinemaInfo = ({ id, logo, name, address, hasInfo, ...props }) => {
  const styles = useStyles(props);
  const cinemaSystem = useSelector((state) => state.cinemaSystems);
  // console.log(props.tenCumRap);
  return (
    <>
      <div className={styles.smallScreen}>
        <NavLink className={styles.root} to="/cinemaDetail">
          <Avatar
            src={cinemaSystem.selectedLogo}
            variant="square"
            className={styles.logo}
          />
          {hasInfo && (
            <Box>
              <Typography
                variant="subtitle2"
                component="p"
                className={`${styles.name} ${styles.ellipsis}`}
              >
                {/* {name} */}
                {props.tenCumRap}
              </Typography>
              <Typography
                variant="subtitle2"
                component="p"
                className={`${styles.address} ${styles.ellipsis}`}
              >
                {/* {address} */}
                {props.diaChi}
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
          )}
        </NavLink>
      </div>

      <div className={styles.bigScreen}>
        <Avatar
          src={cinemaSystem.selectedLogo}
          variant="square"
          className={styles.logo}
        />
        {hasInfo && (
          <Box>
            <Typography
              variant="subtitle2"
              component="p"
              className={`${styles.name} ${styles.ellipsis}`}
            >
              {/* {name} */}
              {props.tenCumRap}
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              className={`${styles.address} ${styles.ellipsis}`}
            >
              {/* {address} */}
              {props.diaChi}
            </Typography>
            {props.hasDetailLink && (
              <NavLink className={styles.root} to="/cinemaDetail">
                <Link
                  to="/cinemaDetail"
                  className={styles.detail}
                  variant="body2"
                >
                  [chi tiết]
                </Link>
              </NavLink>
            )}
          </Box>
        )}
      </div>
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
