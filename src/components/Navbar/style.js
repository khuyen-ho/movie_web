import { makeStyles, Paper } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

export const CssPaper = withStyles((theme) => ({
  root: {
    "&.MuiPaper-root": {
      background:"transparent"
    },
    "&.MuiPaper-rounded": {
      borderRadius: 0,
    },
    "& .MuiTabs-flexContainer": {
      display: "block",
    },
    "& .MuiTabs-centered": {
      textAlign: "right",
    },

    "& label.Mui-focused": {
      color: theme.palette.primary.dark,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.dark,
      },
    },
  },
}))(Paper);

