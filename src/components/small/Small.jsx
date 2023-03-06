import { List, ListItemButton, ListItemText, Typography } from "@mui/material";
import React from "react";

import "../../App.css";

import "./Small.scss";

const Small = () => {
  return (
    <div className=" small border p-3">
      <Typography variant="h6" className=" d-block font-weight-bold mb-4">
        {" "}
        Dogged Realtor{" "}
      </Typography>
      <List>
        <ListItemButton>
          <ListItemText>Home</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemText>About</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemText>Contact</ListItemText>
        </ListItemButton>
      </List>
    </div>
  );
};

export default Small;
