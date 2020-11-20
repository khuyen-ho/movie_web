import { Tab } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderBottom:`1px solid ${theme.palette.grey.light}`,
   
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  dayBtn: {
    height: 60,
    //width: 100,
    borderColor: "transparent!important",
    textAlign: "center",
    "& .img": {
      width: 60,
      padding: 0,
    },
  },
  dayContainer:{
    [theme.breakpoints.down(`${theme.breakpoints.values.sm}`)]: {
      display:"block!important"
    },
  },

  container: {
    margin: "auto",
    [theme.breakpoints.down(`${theme.breakpoints.values.lg}`)]: {
      width: "100%",
    },
  },
}));

export const CssTab = withStyles((theme)=>({
  root: {'&.MuiTab-root': {
      color:theme.palette.grey.dark
      },
    '&.MuiTab-root.Mui-selected': {
    color:theme.palette.secondary.main
    },
    
 
  },
}))(Tab);


export default useStyles;
