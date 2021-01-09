import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 60,
    backgroundImage: `linear-gradient(to bottom right ,#181a67,#4c0144,${theme.palette.grey.dark})`,

    [theme.breakpoints.up("xs")]: {
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(5, 0),
    },
  },
}));

export default useStyles;
