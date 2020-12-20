import {
  makeStyles,
  Table,
  TableContainer,
  withStyles,
} from "@material-ui/core";
import { textAlign } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({

  screen: {
    "& img": {
      width: "80%",
    },
  },

  note: {
    marginTop: theme.spacing(5),
    
  },
  
}));

export const CssTableContainer = withStyles({
  root: {
    "&.MuiTableContainer-root": {
      //width:"25%",
      height: "100vh",
    },
  },
})(TableContainer);

export default useStyles;
