import React, { useState } from "react";
import { Container, Box, Typography } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import useStyles from "./style";

const PersonalInfo = (props) => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const styles = useStyles();

  return (
    <Container maxWidth="lg" className={styles.container}>
      <Box className={styles.info}>
        <Typography className={styles.title} component="h1" variant="h5">
          Thông tin đặt vé
        </Typography>
      </Box>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Box className={styles.dateGroup}>
          <KeyboardDatePicker
            disableToolbar
            autoOk
            variant="inline"
            inputVariant="outlined"
            invalidDateMessage="Ngày không đúng định dạng"
            maxDateMessage="Ngày chọn không được sau ngày 01/01/2100"
            minDateMessage="Ngày chọn không được trước ngày 01/01/1900"
            format="dd/MM/yyyy"
            id="from-date"
            label="Từ ngày"
            value={fromDate}
            onChange={(date) => setFromDate(date)}
            className={styles.datePicker}
          />
          <KeyboardDatePicker
            disableToolbar
            autoOk
            variant="inline"
            inputVariant="outlined"
            invalidDateMessage="Ngày không đúng định dạng"
            maxDateMessage="Ngày chọn không được sau ngày 01/01/2100"
            minDateMessage="Ngày chọn không được trước ngày 01/01/1900"
            format="dd/MM/yyyy"
            id="to-date"
            label="Đến ngày"
            value={toDate}
            onChange={(date) => setToDate(date)}
            className={styles.datePicker}
          />
        </Box>
      </MuiPickersUtilsProvider>
    </Container>
  );
};

export default PersonalInfo;
