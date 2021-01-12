import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    outlineStyle: "none!important",
    padding: 0,
    color: (props) => (props.color ? props.color : theme.palette.primary.main),
    cursor: (props) => (props.noPointer ? "default!important" : "pointer"),

    "&:hover": {
      color: (props) =>
        props.hoverColor ? props.hoverColor : theme.palette.secondary.main,
      background: "none",
      transition: "all 0.3s",
    },

    "&:hover $title": {
      color: (props) =>
        props.hoverColor ? props.hoverColor : theme.palette.secondary.main,
      transition: "all 0.3s",
      textDecoration: "none",
    },
  },

  title: {
    padding: theme.spacing(0, 0.5),
    color: (props) => (props.color ? props.color : theme.palette.primary.main),
  },
}));

export default useStyles;
