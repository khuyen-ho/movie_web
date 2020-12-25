import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1, 0),

    "&:hover": {
      cursor: "pointer",
    },
  },

  logo: {
    width: 50,
    height: 50,
    marginRight: theme.spacing(1),
  },

  name: {
    color: theme.palette.secondary.main,
    fontWeight: 600,
  },

  address: {
    color: theme.palette.grey.main,
  },
}));

export default useStyles;
