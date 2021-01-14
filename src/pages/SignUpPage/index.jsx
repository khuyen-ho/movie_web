import React from "react";
import { Box } from "@material-ui/core";
import SignInUpNavBar from "../../components/SignInUpNavBar";
// import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import useStyles from "./style";

const SignUpPage = (props) => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Box className={styles.navBar}>
        <SignInUpNavBar />
      </Box>

      {/* <Box className={styles.center}>
          <SignIn />
        </Box> */}

      <Box className={styles.center}>
        <SignUp props={props}/>
      </Box>
    </Box>
  );
};

export default SignUpPage;
