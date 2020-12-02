import { Box, Button, ButtonGroup } from "@material-ui/core";
import React, { Component } from "react";
import useStyles, {CssTab, CssPaper, CssTabs} from "./style";
import moment from "moment";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";


const Day = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }; 

  const dayList = [];
  for (let i = 0; i < 7; i++) {
    dayList.push({
      weekDay: moment()
        .date(moment().date() + i)
        .format("ddd Do"),
    });
  }

    //show thông tin thời gian chiếu cụm rạp đó
    const handleClick = (time) =>{
      console.log(time);
    }


  return (
    <CssPaper square>   
      <Tabs
        value={value}
        indicatorColor="secondary"
        textColor="secondary"
        onChange={handleChange}
        aria-label="scrollable disabled tabs example"
        scrollButtons="on"
        variant="scrollable"
      >
        {dayList.map((item, index) => (
          <CssTab label={item.weekDay} key={index} onClick={()=>handleClick(item.weekDay)} />
        ))}
      </Tabs>
    </CssPaper>
  );
};

const DaysOfWeek = (props) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Box className={styles.container} my={5} mx={2}>
        {Day()}
      </Box>
    </div>
  );
};

export default DaysOfWeek;
