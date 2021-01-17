import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.grey.dark,
    borderTop: "5px solid",
    borderColor: theme.palette.secondary.main,
    color: theme.palette.white.main,
    overflow: "hidden",
    padding: theme.spacing(3, 0),
    "& a:hover": {
      textDecoration: "none",
    },
  },

  title: {
    marginBottom: theme.spacing(1),
  },

  logo: {
    height: 35,
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },

  link: {
    display: "block",
    color: theme.palette.grey.main,
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.text.secondary,
      transition: "all 0.3s",
    },
  },
}));

export default useStyles;
