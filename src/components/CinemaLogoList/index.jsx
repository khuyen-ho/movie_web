import React from "react";
import PropTypes from "prop-types";
import { List } from "@material-ui/core";
import CinemaLogo from "../CinemaLogo";
import useStyles from "./style";

const CinemaLogoList = ({ list }) => {
  const styles = useStyles();

  return (
    <List className={styles.root}>
      {list.map((system, index) => (
        <CinemaLogo id={system.maHeThongRap} logo={system.logo} key={index} />
      ))}
    </List>
  );
};

CinemaLogoList.propTypes = {
  list: PropTypes.array,
};

CinemaLogoList.defaultProps = {
  list: [
    {
      maHeThongRap: "BHDStar",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
    },
    {
      maHeThongRap: "CGV",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png",
    },
    {
      maHeThongRap: "CineStar",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png",
    },
    {
      maHeThongRap: "Galaxy",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png",
    },
    {
      maHeThongRap: "LotteCinima",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png",
    },
    {
      maHeThongRap: "MegaGS",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/megags.png",
    },
  ],
};

export default CinemaLogoList;
