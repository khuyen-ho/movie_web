import { makeStyles, Table, TableContainer, withStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
 title:{
     display:"flex",
     justifyContent:"space-between"
 },
    leftTitle:{
      display:"flex",
      justifyContent:'center',
      alignItems:"center"
  },
  logo:{
      height:70,
      "& img":{
          height:"100%"
      }
  }
  
}));
  
export const CssTableContainer = withStyles({
    root: {
        "&.MuiTableContainer-root":{
        //width:"25%",
        height:"100vh"
        }
    },
  })(TableContainer);

export default useStyles