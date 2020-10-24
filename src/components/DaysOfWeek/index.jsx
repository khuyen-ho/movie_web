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
        <Button className={styles.dayBtn} key={index}>
         {item.weekDay}
        </Button>
      ))}
    </ButtonGroup>
  );
};


const DaysOfWeek = (props) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
    <Box className={styles.container} my={5} mx={2} border="1px solid grey">
      {Day()}
    </Box></div>
  );
};

export default DaysOfWeek;
// import React from 'react';
// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

// export default function DaysOfWeek() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <ButtonGroup size="small" aria-label="small outlined button group">
//         <Button>One</Button>
//         <Button>Two</Button>
//         <Button>Three</Button>
//       </ButtonGroup>
//     </div>
//   );
// }