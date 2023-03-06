import React from "react";

import Image from "../../constants";

import { Button, TextField, Typography } from "@mui/material";

import "../../App.css";

import "./Join.scss";

const Join = () => {
  return (
    <>
      <div className=" join-cover  container p-5 ">
        <div className="join">
          <img src={Image.Secondbanner} />

          <div className=" join__pad">
            <Typography
              variant="h4"
              className=" my-3 text-white text-capitalize text-center d-block "
            >
              {" "}
              get to join us now{" "}
            </Typography>
            <Typography
              variant="hp"
              className="  my-3 text-white  text-center d-block "
            >
              {" "}
              keep yourself inform on new entries into the realestate marke and
              be on top of your game
            </Typography>
            <div
              className="mt-5"
              style={{
                display: "grid",
                placeItems: "center",
              }}
            >
              <div
                className="  d-flex
              "
              >
                <TextField
                  sx={{ background: "white" }}
                  size="small"
                  variant="filled"
                ></TextField>
                <Button size="small" className="choose-btnz">
                  {" "}
                  join_us{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;
