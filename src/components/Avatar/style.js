const { makeStyles, withStyles, IconButton } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
container:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
},
ava:{
    width: 50,
    borderRadius:"50%",
    overflow:"hidden",
    [theme.breakpoints.down("sm")]: {
        width: 40,
      },
    '& img':
    {
        width:"100%"
    }
},
name:{
    [theme.breakpoints.down("sm")]: {
        fontSize:13
      },
}
}));

export default useStyles;
