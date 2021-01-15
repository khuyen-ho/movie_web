import React, { useState } from "react";
import PropTypes from "prop-types";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import useStyles from "./style";

const DatePicker = (props) => {
  const [date, setDate] = useState(new Date());
  const styles = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        autoOk
        variant="inline"
        inputVariant="outlined"
        size="small"
        invalidDateMessage="Ngày không đúng định dạng"
        maxDateMessage="Ngày chọn không được sau ngày 01/01/2100"
        minDateMessage="Ngày chọn không được trước ngày 01/01/1900"
        format="dd/MM/yyyy"
        id="date"
        label={props.label}
        value={date}
        onChange={(date) => setDate(date)}
        className={styles.datePicker}
      />
    </MuiPickersUtilsProvider>
  );
};

DatePicker.propTypes = {
  label: PropTypes.string,
};

export default DatePicker;
