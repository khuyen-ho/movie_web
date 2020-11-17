import { makeStyles, Table, TableContainer, withStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
 title:{
     display:"flex",
     justifyContent:"space-between",
     marginTop:theme.spacing(3),
     marginBottom:theme.spacing(3)
 },
    leftTitle:{
      display:"flex",
      justifyContent:'center',
      alignItems:"center"
  },
  logo:{
      height:70,
      marginRight:theme.spacing(2),
      "& img":{
          height:"100%"
      }
  },
  seatArea:{
      marginRight:theme.spacing(45),
      marginLeft:theme.spacing(45),
      marginTop:theme.spacing(5),
  },
  note:{
      display:'flex',
      justifyContent:"center"
  },
  noteChair:{
      paddingRight:theme.spacing(2),
      marginTop:theme.spacing(5)
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