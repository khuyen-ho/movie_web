import { FormControl, MenuItem, Select } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

export default function DropDown(props) {
  const styles = useStyles();
  console.log(props.list);
  return (
    <FormControl className={styles.formControl}>
      <Select
        defaultValue={0}
        classes={{
          select: styles.select,
          icon: styles.icon,
        }}
      >
        {props.list.map((movie, index) => (
          <MenuItem key={index} value={index}>
            {movie}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
