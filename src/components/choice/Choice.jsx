import {
  Button,
  Fab,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

import "../../App.css";

import "./Choice.scss";

const Choice = () => {
  return (
    <div className="container choice">
      <div className=" choice__grid">
        <div className=" choice__grid2">
          <div>
            <Typography variant="h5" className="d-block font-weight-bold">
              {" "}
              55k{" "}
            </Typography>
            <Typography variant="span" className=" my-3 text-black-50 d-block">
              this is just for a test and <br />
              this is just what we want
            </Typography>
          </div>
          <div>
            <Typography variant="h5" className="d-block font-weight-bold">
              {" "}
              18.8k{" "}
            </Typography>
            <Typography variant="span" className=" my-3 text-black-50 d-block">
              this is just for a test and <br />
              this is just what we want
            </Typography>
          </div>
        </div>

        <div>
          <Typography variant="span" className=" text-black-50">
            {" "}
            this is just the tes to fmemocra and i want to be part of it even if
            i dont move that way no i was not buildt that way and in the mean
            time i will tell your what i want
          </Typography>
        </div>

        <div className=" mt-5">
          <Typography
            variant="span"
            fontSize={"35px"}
            className=" font-weight-bold text-capitalize "
          >
            why choos us <br />
            our services
          </Typography>
        </div>

        <div className=" mt-5">
          <Typography variant="span" className=" d-block text-black-50">
            this is just the tes to fmemocra and i want to be part of it even if
            i dont move that way no i was not buildt that way and in the mean
          </Typography>

          <Button className=" choose-btnz" sx={{ marginTop: "30px" }}>
            Learn_more
          </Button>
        </div>

        {/* this is the list and image section */}

        <div className="choice-list mt-5 ">
          <List>
            <ListItemButton className=" shadow-sm my-5" divider={true}>
              <ListItemIcon>
                <Fab
                  size="small"
                  sx={{
                    color: "gray",
                    boxShadow: "none",
                    background: "whitesmoke",
                  }}
                >
                  {" "}
                  <Typography variant="h6" className="  font-weight-bold">
                    1
                  </Typography>
                </Fab>
              </ListItemIcon>

              <ListItemText className=" ">
                <h5 className=" text-black-50 font-weight-bold text-capitalize">
                  {" "}
                  Easy Paymetent Method
                </h5>
                <span className=" text-black-50 d-block mt-2">
                  {" "}
                  you can pay how ever your like
                </span>
              </ListItemText>
            </ListItemButton>
            <ListItemButton className=" shadow-sm my-5" divider={true}>
              <ListItemIcon>
                <Fab
                  size="small"
                  sx={{
                    color: "gray",
                    boxShadow: "none",
                    background: "whitesmoke",
                  }}
                >
                  {" "}
                  <Typography variant="h6" className="  font-weight-bold">
                    2
                  </Typography>
                </Fab>
              </ListItemIcon>

              <ListItemText className=" ">
                <h5 className=" text-black-50 font-weight-bold text-capitalize">
                  {" "}
                  Easy Paymetent Method
                </h5>
                <span className=" text-black-50 d-block mt-2">
                  {" "}
                  you can pay how ever your like
                </span>
              </ListItemText>
            </ListItemButton>
          </List>
        </div>

        <div className=" mt-5">
          <div className=" choice-listimg">
            <img src="https://images.pexels.com/photos/1481105/pexels-photo-1481105.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </div>
        </div>

        <div className=" mt-5">
          {" "}
          <Typography className=" font-weight-bold" variant="h5">
            we provide property
          </Typography>{" "}
        </div>
        <div className=" mt-5 mb-4 d-flex justify-content-between ">
          <Typography
            variant="span"
            className=" font-weight-bold"
            sx={{ textDecoration: "underline" }}
          >
            Apartment
          </Typography>
          <Typography
            variant=" span"
            className=" text-capitalize text-black-50 "
          >
            villa
          </Typography>
          <Typography
            variant=" span"
            className=" text-capitalize text-black-50 "
          >
            land
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Choice;
