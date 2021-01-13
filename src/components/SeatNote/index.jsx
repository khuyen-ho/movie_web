import React from "react";
import { useTheme } from "@material-ui/core";
import { Box } from "@material-ui/core";
import WeekendIcon from "@material-ui/icons/Weekend";
import Tag from "../Tag";
import useStyles from "./style";

const SeatNote = (props) => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <Box className={styles.root}>
      <Box className={styles.note}>
        <Tag
          title="Ghế thường"
          iconElement={<WeekendIcon />}
          hoverColor="none"
          color={theme.palette.grey.main}
          noPointer
        />
      </Box>
      <Box className={styles.note}>
        <Tag
          title="Ghế Vip"
          iconElement={<WeekendIcon />}
          hoverColor="none"
          color={theme.palette.yellow.dark}
          noPointer
        />
      </Box>
      <Box className={styles.note}>
        <Tag
          title="Ghế đang chọn"
          iconElement={<WeekendIcon />}
          hoverColor="none"
          color={theme.palette.green.main}
          noPointer
        />
      </Box>
      <Box className={styles.note}>
        <Tag
          title="Ghế đã chọn"
          iconElement={<WeekendIcon />}
          hoverColor="none"
          color={theme.palette.red.light}
          noPointer
        />
      </Box>
    </Box>
  );
};

export default SeatNote;
