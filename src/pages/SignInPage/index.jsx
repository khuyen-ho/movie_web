import React from "react";
import { Box } from "@material-ui/core";
import SignInUpNavBar from "../../components/SignInUpNavBar";
import useStyles from "./style";
import SignIn from "../../components/SignIn";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getCurrentWebPage } from "../../redux/actions/pageAction";
import { useEffect } from "react";

const SignInPage = (props) => {
  const styles = useStyles();
  const userLogin = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getCurrentWebPage(props.match.url));
  }, [dispatch, props.match.url]);

  if (!userLogin) {
    return (
      <Box className={styles.root}>
        <Box className={styles.navBar}>
          <SignInUpNavBar />
        </Box>

        <Box className={styles.center}>
          <SignIn props={props} />
        </Box>
      </Box>
    );
  } else {
    return <Redirect to="/home" />;
  }
};

export default SignInPage;
