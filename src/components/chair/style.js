const { makeStyles, withStyles, IconButton } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
  chair:{
    backgroundColor:theme.palette.grey.light,
  },
  
  chosen:{
    backgroundColor:"red",
    cursor:"no-drop",
    pointerEvents:"none",
  },
  isChosing:{
    backgroundColor:theme.palette.green.main
  },
  vip:{
    backgroundColor:"orange"
  }

}));

export const CssIconButton = withStyles((theme) => ({
  root: {
    "&.MuiIconButton-root": {
      outline: "none",
      // backgroundColor:theme.palette.grey.light,
      borderRadius: 6,
      width:40,
      height:40,
      fontSize:20,

    },
    
  },
}))(IconButton);
export default useStyles;
