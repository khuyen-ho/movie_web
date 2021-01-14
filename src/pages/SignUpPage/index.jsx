import React from "react";
import { Box } from "@material-ui/core";
import SignInUpNavBar from "../../components/SignInUpNavBar";
// import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import useStyles from "./style";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const SignUpPage = (props) => {
  const styles = useStyles();
  const userLogin = useSelector((state) => state.userLogin);
  if (!userLogin) {
    return (
      <Box className={styles.root}>
        <Box className={styles.navBar}>
          <SignInUpNavBar />
        </Box>

        {/* <Box className={styles.center}>
          <SignIn />
        </Box> */}

        <Box className={styles.center}>
          <SignUp props={props} />
        </Box>
      </Box>
    );
  } else {
    return <Redirect to="/home" />;
  }
};

export default SignUpPage;
