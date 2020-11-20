import { Box, Button, ButtonGroup } from "@material-ui/core";
import React, { Component } from "react";
import useStyles, {CssTab} from "./style";
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

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        {dayList.map((item, index) => (
          <CssTab label={item.weekDay} key={index}  />
        ))}
      </Tabs>
    </Paper>
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
