import { FormControl, MenuItem, Select, InputLabel } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import useStyles from "./style";

const DropDown = ({ list, label, changeAction, ...props }) => {
  const [value, setValue] = React.useState("");
  const styles = useStyles();

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  const CreateList = (list) => {
    return list.map((item) => (
      <MenuItem
        dense
        key={item.id}
        value={item}
        classes={{ root: styles.menuItem }}
      >
        {item.name}
      </MenuItem>
    ));
  };

  return (
    <FormControl variant="outlined" size="small" className={styles.formControl}>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        defaultValue={""}
        value={value}
        classes={{
          select: styles.select,
          icon: styles.icon,
        }}
        label={label}
        onChange={handleChange}
      >
        {CreateList(list)}
      </Select>
    </FormControl>
  );
};

DropDown.propTypes = {
  list: PropTypes.array,
  label: PropTypes.string,
};

DropDown.defaultProps = {
  list: [
    { id: 1, name: "Item1" },
    { id: 2, name: "Item2" },
    { id: 3, name: "Item3" },
  ],
  label: "Label",
};

export default DropDown;
