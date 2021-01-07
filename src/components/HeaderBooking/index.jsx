import React from "react";
import useStyles, { CssPaper} from "./style";
import { Box, Typography } from "@material-ui/core";
import CinemaDetail from "../CinemaDetail";
import AvatarAndName from '../Avatar'

export default function HeaderBooking() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();
  return (
    <CssPaper className={classes.title} square>
      <CinemaDetail/>
      <Box>
        <AvatarAndName/>
      </Box>
    </CssPaper>
  );
}