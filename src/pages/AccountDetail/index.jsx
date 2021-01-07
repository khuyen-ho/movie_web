import React from "react";
import { Box } from "@material-ui/core";
import PersonalInfo from "../../components/PersonalInfo";
import useStyles from "./style";

const Home = () => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <PersonalInfo />
    </Box>
  );
};

export default Home;
