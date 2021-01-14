import React from "react";
import { Box } from "@material-ui/core";
import SignInUpNavBar from "../../components/SignInUpNavBar";
// import SignIn from "../../components/SignIn";
import useStyles from "./style";
import SignIn from "../../components/SignIn";

const SignInPage = (props) => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Box className={styles.navBar}>
        <SignInUpNavBar />
      </Box>

      <Box className={styles.center}>
        <SignIn props={props} />
      </Box>

      {/* <Box className={styles.center}>
          <SignUp />
        </Box>
  */}
    </Box>
  );
};

export default SignInPage;
