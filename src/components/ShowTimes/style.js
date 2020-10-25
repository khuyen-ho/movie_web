import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    img:{
        width:50
    },
    timeBtn:{
        border: `1px solid ${theme.palette.grey.light}`,
        //padding:theme.spacing(1),
        marginRight:theme.spacing(3),
        '& .timeStart':{
            color:theme.palette.green.main,
        },
        "& .timeEnd":{
            color:theme.palette.grey.main
        }
    }
  }));

export default useStyles;
