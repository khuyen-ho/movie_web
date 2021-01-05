const { makeStyles, withStyles, IconButton } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
  noteChair: {
    //paddingRight: theme.spacing(1),
    textAlign:"center",
  },
  chosen:{
    color:"red"
  },
  isChosing:{
    color:theme.palette.green.main
  },
  vip:{
    color:"orange"
  }
 
}));

export const CssIconButton = withStyles((theme) => ({
  root: {
    "&.MuiIconButton-root": {
      outline: "none",
    },
  },
}))(IconButton);
export default useStyles;
