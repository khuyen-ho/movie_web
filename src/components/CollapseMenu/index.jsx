import React from "react";
import {
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Drawer,
  Box,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { useState } from "react";
import useStyles from "./style";
import { NavLink } from "react-router-dom";
const CollapseMenu = ({ links }) => {
  const [state, setState] = useState({ right: false });
  const styles = useStyles();

  const createMenu = (anchor) => {
    return (
      <div
        className={styles.list}
        role="presentation"
        onClick={toggle(anchor, false)}
        onKeyDown={toggle(anchor, false)}
      >
        <List component="nav">
          {links.map(({ title, path }) => (
            // <NavLink to={path}>
              <Link href={path} key={title} className={styles.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </Link>
            // </NavLink>
          ))}
        </List>
      </div>
    );
  };

  const toggle = (anchor, open) => () => {
    setState({ [anchor]: open });
  };

  return (
    <Box className={styles.collapseMenu}>
      <IconButton
        edge="end"
        aria-label="menu"
        style={{ outline: "none" }}
        onClick={toggle("right", true)}
      >
        <Menu />
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onOpen={toggle("right", true)}
        onClose={toggle("right", false)}
      >
        {createMenu("right")}
      </Drawer>
    </Box>
  );
};

export default CollapseMenu;
