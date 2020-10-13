const style = (theme) => ({
  foot: {
    background: "url(./imgs/bg-footer.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderTop: "5px solid",
    borderColor: theme.palette.secondary.main,
    padding: "30px 0",
    color: "#fff",

    "& svg": {
      fontSize: 60,
      width: "100%",
      "@media screen and (max-width: 768px)": {
        "&": {
          fontSize: 70,
        },
      },
    },

    "& .title": {
      marginBottom: 10,
      "@media screen and (max-width: 768px)": {
        "&": {
          marginBottom: 3,
        },
      },
    },
    "& .phone,& .mail": {
      "@media screen and (max-width: 768px)": {
        "&": {
          fontSize: 13,
        },
      },
      "@media screen and (max-width: 576px)": {
        "&": {
          fontSize: 10,
        },
      },
    },
    "& .social,& .cinema,& .movie,& .phone": {
      textAlign: "center",
      "& a": {
        color:theme.palette.grey.light,
        "&:hover": {
          color: theme.palette.grey.main,
          transition:'all 0.3s',
        },
      },
      "& h2": {
        padding: "8px 19px",
        fontWeight: "normal",
        fontSize: 20,
        textTransform: "uppercase",
        color: "#fff",
        backgroundColor: "rgba(255,255,255,0.1)",
        marginBottom: 10,
        display: "inline-block",
        "@media screen and (max-width: 768px)": {
          "&": {
            fontSize: 17,
          },
        },
      },
      "& img": {
        width: 40,
        marginTop: 15,
        "@media screen and (max-width: 768px)": {
          "&": {
            width: 50,
             marginBottom: 10,
          },
        },
        "@media screen and (max-width: 576px)": {
          "&": {
            width: 40,
            marginRight: 10,
          },
        },
      },
      "& ul": {
        listStyle: "none",
        width: "auto",
        maxWidth: 344,
        padding: 0,
        "& li": {
          marginBottom: 10,
          "& a": {
            fontWeight: "normal",
            fontSize: 20,
            textTransform: "inherit",
            color: "#b3c4d5",
            display: "block",
            "@media screen and (max-width: 768px)": {
              "&": {
                fontSize: 17,
              },
            },
            "&:hover": {
              color: theme.palette.secondary.main,
              textDecoration: "none",
              transition: "all 0.3s",
            },

           
          },
        },
      },
    },
    '& .social':{
      "@media screen and (max-width: 768px)": {
        "&": {
         padding:'0 50px'
        },
      },
    },
    "& .logo": {
      textAlign: "center",
    },
  },
});

export default style;
