import React, { useState } from "react";
import PropTypes from "prop-types";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import useStyles from "./style";

const TimePicker = (props) => {
  const [date, setDate] = useState(new Date());
  const styles = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        ampm={false}
        variant="inline"
        inputVariant="outlined"
        label={props.label}
        size="small"
        invalidDateMessage="Ngày không đúng định dạng"
        maxDateMessage="Ngày chọn không được sau ngày 01/01/2100"
        minDateMessage="Ngày chọn không được trước ngày 01/01/1900"
        value={date}
        onChange={(date) => setDate(date)}
        className={styles.timePicker}
      />
    </MuiPickersUtilsProvider>
  );
};

TimePicker.propTypes = {
  label: PropTypes.string,
};

export default TimePicker;
