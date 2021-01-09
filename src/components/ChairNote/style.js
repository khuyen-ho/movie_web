const { makeStyles, withStyles, IconButton } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
  noteChair: {
    //paddingRight: theme.spacing(1),
    textAlign:"center",
    "& span":{
      [theme.breakpoints.down("xs")]: {
        fontSize:10
      },
     
    }
  },
  chosen:{
    backgroundColor:"red",
    pointerEvents:"none",
  },
  isChosing:{
    backgroundColor:theme.palette.green.main,
    pointerEvents:"none",
  },
  vip:{
    backgroundColor:"orange",
    pointerEvents:"none",
  }
 
}));

export const CssIconButton = withStyles((theme) => ({
  root: {
    "&.MuiIconButton-root": {
      outline: "none",
      // backgroundColor:theme.palette.secondary.main,
      borderRadius: 6,
      width:30,
      height:30,
      [theme.breakpoints.down("xs")]: {
        height:20,
        width:20,
      },
    },
  },
}))(IconButton);
export default useStyles;
