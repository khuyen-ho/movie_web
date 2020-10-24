import { Box, Button, ButtonGroup } from "@material-ui/core";
import React, { Component } from "react";
import useStyles from "./style";
import moment from 'moment';

const Day = () => {
  const dayList = [];
  const styles = useStyles();
  for(let i = 0; i<7; i++){
    dayList.push({weekDay: moment().date(moment().date()+i).format('dddd Do')})
  }
  console.log(dayList);
  return (
    <ButtonGroup
      color="secondary"
      aria-label="outlined primary button group"
      variant="text"
    >
      {dayList.map((item, index) => (
        <Button className={styles.logo} key={index}>
         {item.weekDay}
        </Button>
      ))}
    </ButtonGroup>
  );
};


const DaysOfWeek = (props) => {
  const styles = useStyles();
  return (
    <Box className={styles.container} my={5} mx={2} border="1px solid grey">
      {Day()}
    </Box>
  );
};

export default DaysOfWeek;
