import React from "react";
import { Box } from "@material-ui/core";
import SignInUpNavBar from "../../components/SignInUpNavBar";
// import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import useStyles from "./style";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrentWebPage } from "../../redux/actions/pageAction";

const SignUpPage = (props) => {
  const styles = useStyles();
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentWebPage(props.match.url));
  }, []);
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
          <SignUp {...props} />
        </Box>
      </Box>
    );
  } else {
    return <Redirect to="/home" />;
  }
};

export default SignUpPage;
