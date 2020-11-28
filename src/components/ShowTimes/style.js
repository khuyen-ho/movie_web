import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(1),
    },
  },
  title: {
    color: theme.palette.green.dark,
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      margin: 0,
    },
  },
  address:{
    color:theme.palette.grey.main,
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
      padding:0
    },
  },
  img: {
    width: 50,
  },
  timeBtn: {
    border: `1px solid ${theme.palette.grey.light}`,
    padding: "0 5px",
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(1),
    "&:hover": {
      "& .timeStart": {
        color: theme.palette.secondary.main,
      },
    },
    "&:focus":{
      outline:"none"
    },
    "& .timeStart": {
      color: theme.palette.green.main,
    },
    "& .timeEnd": {
      color: theme.palette.grey.main,
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(0.5),
    },
  },
}));

export default useStyles;
