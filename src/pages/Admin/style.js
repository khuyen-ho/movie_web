import { Container, makeStyles, withStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      // paddingTop: 100,
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      height: "100vh",
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));

// export const CssContainer = withStyles((theme) => ({
//   root: {
//     "&.MuiContainer-root": {
//       maxWidth: 1500,
//     },
//   },
// }))(Container);

export default useStyles;
