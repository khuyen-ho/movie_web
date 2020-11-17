import { makeStyles, Table, TableContainer, withStyles } from "@material-ui/core";
import { textAlign } from "@material-ui/system";

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
  cinema:{
      textAlign:"left",
    [theme.breakpoints.down('md')]:{
        transform:"scale(0.8)"
      }
      
  },
  logo:{
      height:70,
      marginRight:theme.spacing(2),
      "& img":{
          height:"100%",
      },
      [theme.breakpoints.down('md')]:{
        height:60,
        marginRight:theme.spacing(0),
      }
  },
  screen:{
     "& img":{
         width:"80%"
     }
  },
  seatArea:{
    marginTop:theme.spacing(5),
      maxWidth:600,
      margin:"auto",
      textAlign:'left'
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