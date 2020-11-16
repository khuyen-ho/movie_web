import { makeStyles, Table, TableContainer, withStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  
  
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