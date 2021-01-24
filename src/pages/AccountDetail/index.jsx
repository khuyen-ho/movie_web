import React from "react";
import PersonalInfo from "../../components/PersonalInfo";
import BookingInfo from "../../components/BookingInfo";
import useStyles from "./style";
import wrapper from "../../HOCs/Wrapper";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentWebPage } from "../../redux/actions/pageAction";
import { useEffect } from "react";
import { Container } from "@material-ui/core";
import BackToTop from "../../components/BackToTop";

const Home = (props) => {
  const styles = useStyles();
  const userLogin = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentWebPage(props.match.url));
  }, [dispatch, props.match.url]);

  if (userLogin) {
    return (
      <Container maxWidth="lg" className={styles.root}>
        <PersonalInfo />
        <BookingInfo />
        <BackToTop showBelow={300} />
      </Container>
    );
  } else {
    return <Redirect to="/signin" />;
  }
};

export default wrapper(Home);
