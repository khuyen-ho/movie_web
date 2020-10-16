import React from "react";
import { Button, Container, Typography } from "@material-ui/core";
import useStyle from "./style";
import DropDown from "../DropDown";

export default function SearchMovie() {
  return (
    <Container fixed classes={{ fixed: useStyle().container }}>
      <DropDown />
      <DropDown />
      <DropDown />
      <DropDown />
      <Button variant="contained" color="primary">
        MUA VÉ NGAY
      </Button>
    </Container>
  );
}
