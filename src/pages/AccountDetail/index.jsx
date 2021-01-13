import React from "react";
import { Container } from "@material-ui/core";
import PersonalInfo from "../../components/PersonalInfo";
import BookingInfo from "../../components/BookingInfo";
import useStyles from "./style";

const Home = () => {
  const styles = useStyles();

  return (
    <Container maxWidth="lg" className={styles.root}>
      <PersonalInfo />
      <BookingInfo />
    </Container>
  );
};

export default Home;
