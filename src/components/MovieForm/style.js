import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.secondary.main,
    margin: theme.spacing(1, 0),
    fontSize: theme.typography.h6.fontSize,
  },

  content: {
    display: "flex",
    flexDirection: "column",
  },

  input: {
    margin: theme.spacing(1, 0),
    width: "100%",

    "& .MuiInputBase-root, & .MuiInputLabel-root": {
      fontSize: theme.typography.body2.fontSize,
    },

    "& .MuiInputLabel-root": {
      color: theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: theme.shape.borderRadius,

      "& fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
  },

  desc: {
    [theme.breakpoints.up("xs")]: {
      marginTop: 0,
      marginBottom: theme.spacing(1),
      "& .MuiInputBase-inputMultiline": {
        height: 130,
      },
    },
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(1, 0),
      "& .MuiInputBase-inputMultiline": {
        height: "auto",
      },
    },
  },

  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },

  datePicker: {
    margin: theme.spacing(0.5, 0),
    width: "100%",

    "& button": {
      outlineStyle: "none",
    },

    "& .MuiInputBase-root, & .MuiInputLabel-root": {
      fontSize: theme.typography.body2.fontSize,
    },

    "& .MuiInputLabel-root": {
      color: theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: theme.shape.borderRadius,

      "& fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },

    "& .MuiOutlinedInput-adornedEnd": {
      padding: 0,
    },

    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
    },
  },

  uploader: {
    "& .fileContainer": {
      border: "1.0px solid red",
      justifyContent: "flex-start",
      padding: theme.spacing(1, 0),
      borderColor: theme.palette.primary.main,
      borderRadius: theme.shape.borderRadius,
      "& p": {
        margin: theme.spacing(0.5, 1),
      },

      "& button": {
        color: theme.palette.white,
        margin: theme.spacing(1),
        fontSize: theme.typography.subtitle2.fontSize,
        fontWeight: theme.typography.subtitle2.fontWeight,
        background: theme.palette.primary.main,
      },

      "& .uploadPictureContainer": {
        margin: theme.spacing(1),
        width: 142,

        "& .deleteImage": {
          background: theme.palette.secondary.main,
        },
      },

      [theme.breakpoints.up("xs")]: {
        height: 370,
        margin: 0,
      },
      [theme.breakpoints.up("md")]: {
        height: 389,
        margin: theme.spacing(1, 0),
      },
    },
  },

  button: {
    color: theme.palette.white,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    fontSize: theme.typography.subtitle2.fontSize,
    fontWeight: theme.typography.subtitle2.fontWeight,
    "&:focus": {
      outline: "none",
    },

    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: 150,
    },
  },
}));

export default useStyles;
