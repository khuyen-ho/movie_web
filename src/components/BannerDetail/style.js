import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    position: "relative",
    backgroundImage: `linear-gradient(to bottom right ,#181a67,#4c0144,${theme.palette.grey.dark})`,
    padding: theme.spacing(5, 0),
  },

  //-------------- big banner ----------------
  big_banner: {
    maxWidth: 950,
    margin: "auto",
    position: "relative",
    [theme.breakpoints.down(`${theme.breakpoints.values.sm}`)]: {
      display: "none",
    },
  },
  //image movie
  poster: {
    position: "relative",
    marginTop: 50,
    borderRadius: 5,
    width: "100%",
    "& img": { boxShadow: "8px 8px 15px 3px #000" },
    "&:hover": {
      cursor: "pointer",
    },

    [theme.breakpoints.down(`${theme.breakpoints.values.md}`)]: {
      transform: "scale(0.8)",
    },
  },
  //play button
  poster_play: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    transition: "all 0.2s",
    "& button": {
      position: "relative",
      top: "50%",
      transform: "translateY(-50%)",
      color: theme.palette.white,
      "&:hover": {
        color: theme.palette.secondary.main,
        transition: "all 0.2s",
      },
      "& svg": {
        fontSize: 60,
        "@media screen and (max-width: 768px)": {
          "&": {
            fontSize: 40,
          },
        },
      },
    },
  },
  //rating part
  score: {
    position: "absolute",
    top: "50%",
    color: theme.palette.secondary.main,
    padding: 4,
    transform: "scale(2.5) translate(50%,-50%)",
    backgroundColor: "#000",
    opacity: 0.8,
    border: `3px solid ${theme.palette.secondary.main}`,
    height: 70,
    width: 70,
    borderRadius: 70,
    [theme.breakpoints.down(`${theme.breakpoints.values.lg}`)]: {
      height: 60,
      width: 60,
      borderRadius: 60,
      border: `2px solid ${theme.palette.secondary.main}`,
      paddingTop: 0,
      transform: "scale(2) translate(50%,-50%)",
    },
    [theme.breakpoints.down(`${theme.breakpoints.values.md}`)]: {
      display: "none",
    },
  },
  //rating part in md screen
  score_md: {
    color: theme.palette.secondary.main,
    padding: 4,
    transform: "scale(2.5) ",
    backgroundColor: "#000",
    opacity: 0.8,
    border: `3px solid ${theme.palette.secondary.main}`,
    height: 70,
    width: 70,
    borderRadius: 70,

    display: "none",
    [theme.breakpoints.down(`${theme.breakpoints.values.md}`)]: {
      display: "block",
      margin: "auto",
      transform: "scale(1.5)",
      marginBottom: theme.spacing(3),
      marginTop: theme.spacing(4),
    },
  },
  point: {
    margin: 0,
    paddingTop: theme.spacing(1),
    color: theme.palette.white,
    fontSize: 17,
    lineHeight: 1,
    [theme.breakpoints.down(`${theme.breakpoints.values.sm}`)]: {
      paddingTop: 0,
    },
  },
  //title movie
  title: {
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    color: theme.palette.white,
    marginTop: 10,
    textAlign: "left",
    padding: "0 30px",
    "& p": {
      texAlign: "left",
      margin: 0,
      "& span": {
        display: "inline-block",
        backgroundColor: "#000",
        borderRadius: 5,
        width: 35,
        textAlign: "center",
        marginRight: 10,
        "&.tag-p": {
          background: "#000",
        },
      },
    },
    "& button": {
      width: "130px",
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.white,
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
      },
    },
    [theme.breakpoints.down(`${theme.breakpoints.values.md}`)]: {
      textAlign: "center",
    },
  },
  titleMovie: {
    color: theme.palette.secondary.main,
    paddingBottom: theme.spacing(3),
    fontSize: 30,
    [theme.breakpoints.down(`${theme.breakpoints.values.md}`)]: {
      paddingBottom: theme.spacing(1),
    },
  },
  descMovie: {
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down(`${theme.breakpoints.values.md}`)]: {
      display: "none",
    },
  },
  dateMovie: {
    paddingBottom: theme.spacing(2),
  },
  //------------- end big banner-----------------

  //------------- small banner------------------
  small_banner: {
    display: "none",
    position: "relative",
    overflow: "hidden",
    [theme.breakpoints.down(`${theme.breakpoints.values.sm}`)]: {
      display: "block",
    },
  },

  //overlay cover video
  overlay: {
    height: 250,
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 10,
    opacity: 0.8,
    "& img": {
      width: "100%",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },

  //play button
  playBtn: {
    color: theme.palette.white,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontSize: 100,
    "&:hover": {
      transition: "all 0.3s",
      color: theme.palette.secondary.main,
    },
  },
  descMovie_md: {
    marginTop: theme.spacing(3),
    padding: "0 5%",
    textAlign: "left",
    display: "none",
    [theme.breakpoints.down(`${theme.breakpoints.values.md}`)]: {
      display: "block",
    },
    [theme.breakpoints.down(`${theme.breakpoints.values.sm}`)]: {
      display: "none",
    },
  },

  //title in sm screen
  title_sm: {
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  titleMovie_sm: {
    color: theme.palette.secondary.main,
    fontSize: 30,
    display: "none",
    background: "transparent",
    [theme.breakpoints.down(`${theme.breakpoints.values.sm}`)]: {
      display: "block",
    },
  },
  dateMovie_sm: {
    paddingBottom: theme.spacing(2),
    display: "none",
    [theme.breakpoints.down(`${theme.breakpoints.values.sm}`)]: {
      display: "block",
    },
  },
  score_sm: {
    color: theme.palette.secondary.main,
    padding: 4,
    backgroundColor: "#000",
    opacity: 0.8,
    border: `2px solid ${theme.palette.secondary.main}`,
    height: 50,
    width: 70,
    borderRadius: 5,
    position: "relative",
  },
  //rating in sm screen
  rating: {
    "& svg": {
      fontSize: 10,
    },
  },
}));

export default useStyle;
