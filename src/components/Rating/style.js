import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme, props) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: theme.spacing(0.2, 0),
  },

  mini_root: {
    width: 75,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.blue.dark,
  },

  large_root: {
    width: "100%",
  },

  score: {
    color: theme.palette.white.main,
  },

  mini_score: {
    fontSize: theme.typography.h6.fontSize,
    marginBottom: theme.spacing(-1),
  },

  large_score: {
    fontSize: theme.typography.h2.fontSize,
    lineHeight: "7.6rem",
    width: 130,
    height: 130,
    borderRadius: "50%",
    border: `solid 6px ${theme.palette.secondary.main}`,
    backgroundColor: "rgba(0,0,0,.4)",
    marginBottom: theme.spacing(0.5),
  },

  star: {
    color: theme.palette.secondary.main,
    margin: theme.spacing(-0.1),
  },

  mini_star: {
    fontSize: theme.typography.subtitle2.fontSize,
  },

  large_star: {
    fontSize: theme.typography.h4.fontSize,
  },
}));

export default useStyles;
