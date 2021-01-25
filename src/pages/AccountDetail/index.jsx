import React from "react";
import PersonalInfo from "../../components/PersonalInfo";
import BookingInfo from "../../components/BookingInfo";
import BackToTop from "../../components/BackToTop";
import useStyles from "./style";
import wrapper from "../../HOCs/Wrapper";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentWebPage } from "../../redux/actions/pageAction";
import { useEffect } from "react";
import { Container } from "@material-ui/core";
import { getAccountInfo } from "../../redux/actions/userAction";

const Home = (props) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userLogin);

  useEffect(() => {
    dispatch(getCurrentWebPage(props.match.url));
  }, [dispatch, props.match.url]);

  useEffect(() => {
    dispatch(getAccountInfo(user, { taiKhoan: user.taiKhoan }));
  }, [dispatch, user]);

  if (user) {
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
