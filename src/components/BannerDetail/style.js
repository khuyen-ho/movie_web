import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  score: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    maxWidth: 950,
    margin: "auto",
    [theme.breakpoints.down(`${theme.breakpoints.values.sm}`)]: {
      display: "none",
    },
  },
  item: {
    textAlign: "center",
    position: "relative",
    backgroundImage: `linear-gradient(to bottom right ,#181a67,#4c0144,${theme.palette.grey.dark})`,
    paddingBottom: theme.spacing(5),

    "& .img": {
      position: "relative",
      marginTop: 50,
      borderRadius: 5,
      width: "100%",
      // overflow: "hidden",

      "& img": { boxShadow: "8px 8px 15px 3px #000" },
      "&:hover": {
        cursor: "pointer",
      },
      "&__overlay": {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        //opacity: 0,
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
      [theme.breakpoints.down(`${theme.breakpoints.values.md}`)]: {
        transform: "scale(0.8)",
      },
    },
    "& .title": {
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
      "& .titleMovie": {
        color: theme.palette.secondary.main,
        paddingBottom: theme.spacing(3),
        fontSize: 30,
        [theme.breakpoints.down(`${theme.breakpoints.values.md}`)]: {
          paddingBottom: theme.spacing(1),
        },
      },
      "& .descMovie": {
        paddingBottom: theme.spacing(2),
        [theme.breakpoints.down(`${theme.breakpoints.values.md}`)]: {
          display: "none",
        },
      },
      "& .dateMovie": {
        paddingBottom: theme.spacing(2),
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
    "& .score,& .score_after": {
      color: theme.palette.secondary.main,
      padding: 4,
      transform: "scale(2.5) ",
      backgroundColor: "#000",
      opacity: 0.8,
      border: `3px solid ${theme.palette.secondary.main}`,
      height: 70,
      width: 70,
      borderRadius: 70,
      "& .point": {
        margin: 0,
        paddingTop: theme.spacing(1),
        color: theme.palette.white,
        fontSize: 17,
        lineHeight: 1,
      },
    },
    "& .score_after": {
      display: "none",
      [theme.breakpoints.down(`${theme.breakpoints.values.md}`)]: {
        display: "block",
        margin: "auto",
        transform: "scale(1.5)",
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(4),
      },
    },
    "& .score": {
      [theme.breakpoints.down(`${theme.breakpoints.values.lg}`)]: {
        height: 60,
        width: 60,
        borderRadius: 60,
        border: `2px solid ${theme.palette.secondary.main}`,
        paddingTop: 0,
        transform: "scale(2) translateX(-25%)",
      },
      [theme.breakpoints.down(`${theme.breakpoints.values.md}`)]: {
        display: "none",
      },
    },
  },

  trailer: {
    display: "none",
    position: "relative",
    overflow: "hidden",
    [theme.breakpoints.down(`${theme.breakpoints.values.sm}`)]: {
      display: "block",
    },
  },
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
    "& svg": {
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
    "&:hover": {
      cursor: "pointer",
    },
    "& .title_sm": {
      padding: "0 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",

      "& .titleMovie_after": {
        color: theme.palette.secondary.main,
        fontSize: 30,
        display: "none",
        background: "transparent",
        [theme.breakpoints.down(`${theme.breakpoints.values.sm}`)]: {
          display: "block",
        },
      },

      "& .dateMovie_after": {
        paddingBottom: theme.spacing(2),
        display: "none",
        [theme.breakpoints.down(`${theme.breakpoints.values.sm}`)]: {
          display: "block",
        },
      },
    },
  },
  title_desc_after: {
    "& .descMovie_after": {
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

    [theme.breakpoints.down(`${theme.breakpoints.values.sm}`)]: {
      textAlign: "left",
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
    position:"relative",
    "& .point": {
      margin: 0,
      //paddingTop: theme.spacing(1),
      color: theme.palette.white,
      fontSize: 17,
      lineHeight: 1,
    },
    "& .rating": {
      position:"absolute",
      transform:"translate(-35%,10%)",
      "& svg": {
        fontSize: 11,
        position: "relative",
        color: theme.palette.secondary.main,
      },
    },
  },
}));

export default useStyle;
