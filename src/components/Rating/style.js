import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mini: {
    root: {
      width: 75,
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.blue.dark,
      padding: theme.spacing(0.2, 0),
    },

    score: {
      color: theme.palette.white,
      marginBottom: theme.spacing(-1),
    },

    star: {
      color: theme.palette.secondary.main,
      borderColor: "black",
      fontSize: theme.typography.subtitle2.fontSize,
      margin: theme.spacing(-0.1),
    },
  },
}));

export default useStyles;
