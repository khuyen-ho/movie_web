import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import useStyles from "./style";
import CinemaSystem from "../CinemaSystem";

const CinemaSystemList = ({ list }) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      {list.map((system, index) => (
        <CinemaSystem
          logo={system.logo}
          name={system.tenHeThongRap}
          key={index}
        />
      ))}
    </Box>
  );
};

CinemaSystemList.propTypes = {
  list: PropTypes.array,
};

CinemaSystemList.defaultProps = {
  list: [
    {
      maHeThongRap: "BHDStar",
      tenHeThongRap: "BHD Star Cineplex",
      biDanh: "bhd-star-cineplex",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
    },
    {
      maHeThongRap: "CGV",
      tenHeThongRap: "CGV",
      biDanh: "cgv",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png",
    },
    {
      maHeThongRap: "CineStar",
      tenHeThongRap: "CineStar",
      biDanh: "cinestar",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png",
    },
    {
      maHeThongRap: "Galaxy",
      tenHeThongRap: "Galaxy Cinema",
      biDanh: "galaxy-cinema",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png",
    },
    {
      maHeThongRap: "LotteCinima",
      tenHeThongRap: "Lotte Cinema",
      biDanh: "lotte-cinema",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png",
    },
    {
      maHeThongRap: "MegaGS",
      tenHeThongRap: "MegaGS",
      biDanh: "megags",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/megags.png",
    },
  ],
};

export default CinemaSystemList;
