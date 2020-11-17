import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useStyles, { CssTabs } from "./style";
import { Box, Typography } from "@material-ui/core";

export default function HeaderBooking() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();
  return (
    <Paper className={classes.title} square>
      <CssTabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="CHỌN GHẾ & THANH TOÁN" />
        <Tab label="KẾT QUẢ ĐẶT VÉ" disabled />
      </CssTabs>
      <Box>
        <Typography variant='h6'>Họ tên</Typography>
      </Box>
    </Paper>
  );
}
