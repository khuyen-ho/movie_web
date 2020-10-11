const style = (theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "#1a1a1a",
    color: "#fff",
  },
  media: {
    height: 250,
  },
  btn: {
    border: "2px solid #121212",
    backgroundColor: "#000",
    color: "#fff",
    "&:hover": {
      color: "#c8bc44",
      backgroundColor: "#464646",
      transition: "all 0.3s",
    },
  },

  item: {
    textAlign: "center",
    position: "relative",
    "& .titleMovie": {
      "@media screen and (max-width: 768px)": {
        "&": {
          fontSize: 15,
        },
      },
    },
    "&:hover .title": {
      "& p,& .titleMovie": {
        opacity: 0,
      },
    },
    "&:hover .title button": {
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
    },
    "&:hover .img__overlay": {
      opacity: 1,
    },

    "& .img": {
      position: "relative",
      marginTop: 50,
      borderRadius: 5,
      height: 250,
      width: "100%",
      overflow: "hidden",
      "@media screen and (max-width: 992px)": {
        "&": {
          height: 220,
        },
      },
      "@media screen and (max-width: 768px)": {
        "&": {
          height: 170,
        },
      },
      "@media screen and (max-width: 576px)": {
        "&": {
          height: 140,
        },
        "& img": {
          width: "100%",
        },
      },
      "&__overlay": {
        position: "absolute",
        top: 0,
        left: 0,
        background: "linear-gradient(to bottom, transparent, #000)",
        height: "100%",
        width: "100%",
        opacity: 0,
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
    },
    "& .title": {
      position: "relative",
      marginTop: 10,

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
        display: "none",
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.white,
        "&:hover": {
          backgroundColor: theme.palette.secondary.dark,
        },
      },
    },
    "& .score": {
      position: "absolute",
      top: 10,
      right: 10,
      //padding: "0 5px",
      backgroundColor: "#000",
      opacity: 0.8,
      border: "1px solid #000",
      borderRadius: 5,
      color: theme.palette.secondary.main,
     // width: 60,
      lineHeight:1,
      // "@media screen and (max-width: 992px)": {
      //   "&": {
      //     width: 60,
      //   },
      // },
      // "@media screen and (max-width: 768px)": {
      //   "&": {
      //     width: 50,
      //   },
      // },
      // "@media screen and (max-width: 576px)": {
      //   "&": {
      //     width: 40,
      //     height: 35,
      //   },
      //},
      '& .point':{
        margin:0,
        color:theme.palette.white,
        fontSize:17,
        lineHeight:1,
        "@media screen and (max-width: 768px)": {
            "&": {
              fontSize:15,
            },
          },
      }
    },
  },
});
export default style;
