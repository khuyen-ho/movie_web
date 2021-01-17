import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  search: {
    margin: theme.spacing(1, 0),

    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "49.5%",
    },
  },

  iconButton: {
    padding: theme.spacing(0.5),
    "&:focus": {
      outline: "none",
    },
  },

  table: {
    padding: theme.spacing(1, 0),
  },
}));

export default useStyles;
