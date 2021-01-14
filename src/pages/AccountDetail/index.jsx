import React from "react";
import { Box } from "@material-ui/core";
import PersonalInfo from "../../components/PersonalInfo";
import BookingInfo from "../../components/BookingInfo";
import useStyles from "./style";
import wrapper from "../../HOCs/Wrapper";
import { Redirect } from "react-router-dom";

const Home = (props) => {
  const styles = useStyles();
  console.log(props.history);
  if (localStorage.getItem("userLogin")) {
    return (
      <Box className={styles.root}>
        <PersonalInfo />
        <BookingInfo />
      </Box>
    );
  }
  else{
    alert("Vui lòng đăng nhập")
    return <Redirect to='/signin'/>
  }
};

export default wrapper(Home);
