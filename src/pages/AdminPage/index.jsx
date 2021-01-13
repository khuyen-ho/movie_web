import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import { Container, Box, List, ListItem, Divider } from "@material-ui/core";
import MovieRoundedIcon from "@material-ui/icons/MovieRounded";
import GroupIcon from "@material-ui/icons/Group";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import ScheduleIcon from "@material-ui/icons/Schedule";
import AccountManagement from "../../components/AccountManagement";
import Tag from "../../components/Tag";
import useStyles from "./style";

const Admin = () => {
  const [tab, setTab] = useState(0);
  const styles = useStyles();
  const theme = useTheme();

  return (
    <Container className={styles.root}>
      <Box className={styles.leftPanel}>
        <List className={styles.list}>
          <ListItem
            className={styles.listItem}
            classes={{ selected: styles.selected, button: styles.noBackground }}
            button
            selected={tab === 0}
            onClick={() => setTab(0)}
          >
            <Tag
              iconElement={<MovieRoundedIcon fontSize="large" />}
              title="Trang chủ"
              color={theme.palette.white.main}
              hoverColor="none"
            />
          </ListItem>
          <Divider classes={{ root: styles.divider }} />
          <ListItem
            className={styles.listItem}
            classes={{ selected: styles.selected, button: styles.noBackground }}
            button
            selected={tab === 1}
            onClick={() => setTab(1)}
          >
            <Tag
              iconElement={<GroupIcon fontSize="large" />}
              title="Quản lý người dùng"
              color={theme.palette.white.main}
              hoverColor="none"
            />
          </ListItem>
          <ListItem
            className={styles.listItem}
            classes={{ selected: styles.selected, button: styles.noBackground }}
            button
            selected={tab === 2}
            onClick={() => setTab(2)}
          >
            <Tag
              iconElement={<LocalMoviesIcon fontSize="large" />}
              title="Quản lý phim"
              color={theme.palette.white.main}
              hoverColor="none"
            />
          </ListItem>
          <ListItem
            className={styles.listItem}
            classes={{ selected: styles.selected, button: styles.noBackground }}
            button
            selected={tab === 3}
            onClick={() => setTab(3)}
          >
            <Tag
              iconElement={<ScheduleIcon fontSize="large" />}
              title="Quản lý lịch chiếu"
              color={theme.palette.white.main}
              hoverColor="none"
            />
          </ListItem>
          <Divider classes={{ root: styles.divider }} />
          <ListItem
            className={styles.listItem}
            classes={{ selected: styles.selected, button: styles.noBackground }}
            button
            selected={tab === 4}
            onClick={() => setTab(4)}
          >
            <Tag
              iconElement={<AccountCircleIcon fontSize="large" />}
              title="Thông tin cá nhân"
              color={theme.palette.white.main}
              hoverColor="none"
            />
          </ListItem>
        </List>
      </Box>
      <Box className={styles.info}>
        <AccountManagement />
      </Box>
    </Container>
  );
};

export default Admin;
