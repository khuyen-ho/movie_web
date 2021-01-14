import React from "react";
import { Box } from "@material-ui/core";
import SignInUpNavBar from "../../components/SignInUpNavBar";
// import SignIn from "../../components/SignIn";
import useStyles from "./style";
import SignIn from "../../components/SignIn";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const SignInPage = (props) => {
  const styles = useStyles();
  const userLogin = useSelector((state) => state.userLogin);
  if (!userLogin) {
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
  } else {
    return <Redirect to="/home" />;
  }
};

export default SignInPage;
