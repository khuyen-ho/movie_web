import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toTop: {
    position: "fixed",
    bottom: "8vh",
    right: "3%",
    padding: theme.spacing(0.5),
    color: theme.palette.white.main,
    background: theme.palette.primary.main,
    outlineStyle: "none!important",
    zIndex: 5,

    "&:hover, &:focus": {
      background: theme.palette.green.main,
      transition: "0.3s",
    },
  },
}));

export default useStyles;
