import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    padding: theme.spacing(0.5),
    "&:focus": {
      outline: "none",
    },
  },

  seat: {
    color: (props) =>
      props.type === "Thuong"
        ? theme.palette.grey.main
        : theme.palette.yellow.dark,
  },

  pick: {
    color: theme.palette.green.main,
  },

  reserved: {
    color: theme.palette.red.light,
    cursor: "no-drop",

    "& + $number": {
      cursor: "no-drop",
    },
  },

  number: {
    position: "absolute",
    top: "43%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: 10,
    color: theme.palette.text.primary,
    fontWeight: 600,
  },
}));

export default useStyles;
