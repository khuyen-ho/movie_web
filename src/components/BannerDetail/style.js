import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(to bottom right ,#181a67,#4c0144,${theme.palette.grey.dark})`,

    [theme.breakpoints.up("xs")]: {
      padding: theme.spacing(0),
    },
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(5, 0),
    },
  },

  detail: {
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },
}));

export default useStyles;
