import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { IconButton, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@material-ui/lab/Autocomplete";
import useStyles from "./style";

const Search = ({
  autoList,
  placeholder,
  dispatchType,
  searchAction,
  state,
  ...props
}) => {
  const dispatch = useDispatch();
  const styles = useStyles();

  const handleInputChange = (newInputValue) => {
    dispatch({
      type: dispatchType,
      payload: newInputValue,
    });
  };

  return (
    <>
      <Autocomplete
        freeSolo
        id="autocomplete"
        disableClearable
        options={autoList}
        className={styles.root}
        inputValue={state}
        onInputChange={(event, newInputValue) =>
          handleInputChange(newInputValue)
        }
        renderInput={(params) => (
          <>
            <TextField
              {...params}
              placeholder={placeholder}
              fullWidth
              className={styles.input}
            ></TextField>
            <IconButton className={styles.iconButton} onClick={searchAction}>
              <SearchIcon className={styles.searchIcon} fontSize="large" />
            </IconButton>
          </>
        )}
      />
    </>
  );
};

Search.propTypes = {
  autoList: PropTypes.array,
  placeholder: PropTypes.string,
  dispatchType: PropTypes.string,
  searchAction: PropTypes.func,
};

Search.defaultProps = {
  autoList: [],
  placeholder: "Nhập tìm kiếm...",
};

export default Search;
