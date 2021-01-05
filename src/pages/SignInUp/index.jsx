import React from "react";
import { Box } from "@material-ui/core";
import SignInUpNavBar from "../../components/SignInUpNavBar";
import SignIn from "../../components/SignIn";
import useStyles from "./style";

const SignInUp = () => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <SignInUpNavBar />
      <Box className={styles.center}>
        <SignIn />
      </Box>
    </Box>
  );
};

export default SignInUp;
