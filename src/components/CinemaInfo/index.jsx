import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Typography } from "@material-ui/core";
import useStyles from "./style";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CinemaInfo = (props) => {
  const styles = useStyles(props);
  const logo = useSelector((state) => state.cinemaSystems.selectedLogo);
  const cinemaSystem = useSelector((state) => state.cinemaSystems);
  const { info, hasInfo, hasDetailLink } = props;

  return (
    <>
      <Box className={styles.smallScreen}>
        <Link className={styles.root} to={`/cinema-detail/${info.id}`}>
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
              {hasDetailLink && (
                <Link
                  to={`/cinema-detail/${info.id}`}
                  className={styles.detail}
                  variant="body2"
                >
                  [chi tiết]
                </Link>
              )}
            </Box>
          )}
        </Link>
      </Box>

      <Box className={styles.bigScreen}>
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
              {info.name}
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              className={`${styles.address} ${styles.ellipsis}`}
            >
              {info.address}
            </Typography>
            {hasDetailLink && (
              <Link
                to={`/cinema-detail/${info.id}`}
                className={styles.detail}
                variant="body2"
              >
                [chi tiết]
              </Link>
            )}
          </Box>
        )}
      </Box>
    </>
  );
};

CinemaInfo.propTypes = {
  info: PropTypes.object,
  hasEllipsis: PropTypes.bool,
  hasDetailLink: PropTypes.bool,
  hasInfo: PropTypes.bool,
};

export default CinemaInfo;
