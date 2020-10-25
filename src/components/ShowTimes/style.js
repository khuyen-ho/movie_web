import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  title: {
    color: theme.palette.green.dark,
    marginLeft: theme.spacing(2),
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
    "& .timeStart": {
      color: theme.palette.green.main,
    },
    "& .timeEnd": {
      color: theme.palette.grey.main,
    },
  },
}));

export default useStyles;
