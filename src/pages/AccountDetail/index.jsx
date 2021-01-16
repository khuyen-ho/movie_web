import React from "react";
import { Container } from "@material-ui/core";
import PersonalInfo from "../../components/PersonalInfo";
import BookingInfo from "../../components/BookingInfo";
import BackToTop from "../../components/BackToTop";
import useStyles from "./style";

const Home = () => {
  const styles = useStyles();

  return (
    <Container maxWidth="lg" className={styles.root}>
      <PersonalInfo />
      <BookingInfo />
      <BackToTop showBelow={300} />
    </Container>
  );
};

export default Home;
