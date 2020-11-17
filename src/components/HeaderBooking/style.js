const { makeStyles, Tabs, withStyles } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
   
  title:{
     display:'flex',
     justifyContent:"space-between",
     alignItems:"center",
     paddingLeft:theme.spacing(3),
     paddingRight:theme.spacing(3),
   }
  }));


  export const CssTabs = withStyles((theme)=>({
    root: {
      "& .Mui-selected": {
      color:theme.palette.secondary.main
      },
    },
  }))(Tabs);
  export default useStyles