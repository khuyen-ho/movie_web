const { makeStyles, Tabs, withStyles } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
    title: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
            marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
          },
      },
    leftTitle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      rightTitle:{
        [theme.breakpoints.down("sm")]: {
            transform: "scale(0.7)",
          },
      },
      cinema: {
        textAlign: "left",
        [theme.breakpoints.down("md")]: {
          transform: "scale(0.8) translateX(-30px)",
        },
        [theme.breakpoints.down("sm")]: {
            transform: "scale(0.7) translateX(-40px)",
          },
      },
      logo: {
        height: 70,
        marginRight: theme.spacing(2),
        "& img": {
          height: "100%",
        },
        [theme.breakpoints.down("md")]: {
          height: 60,
          marginRight: theme.spacing(0),
        },
        [theme.breakpoints.down("md")]: {
            height: 50,
          },
      },
  }));


  export const CssTabs = withStyles((theme)=>({
    root: {
      "& .Mui-selected": {
      color:theme.palette.secondary.main
      },
    },
  }))(Tabs);
  export default useStyles