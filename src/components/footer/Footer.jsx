import { FacebookOutlined, Instagram, Twitter } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

import "../../App.css";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className=" container footer border-top  pt-5">
      <div className="  footer__grid p-3 ">
        <div>
          <Typography
            variant="span"
            className=" d-block mb-3 text-capitalize font-weight-bold"
          >
            real estate
          </Typography>
          <Typography
            variant="span"
            className="my-3 d-block  text-capitalize text-black-50 "
          >
            how is this possible
          </Typography>

          <NavLink className="text-decoration-none">
            <Typography
              variant="span"
              className="my-3 d-block  text-capitalize text-black-50 "
            >
              how is this possible
            </Typography>
          </NavLink>

          <div
            className=" mt-5 d-flex justify-content-between"
            style={{ maxWidth: "150px" }}
          >
            <NavLink>
              <IconButton>
                <FacebookOutlined className=" text-dark" fontSize="small" />
              </IconButton>
            </NavLink>
            <NavLink>
              <IconButton>
                <Instagram className=" text-dark" fontSize="small" />
              </IconButton>
            </NavLink>
            <NavLink>
              <IconButton>
                <Twitter className=" text-dark" fontSize="small" />
              </IconButton>
            </NavLink>
          </div>
        </div>
        <div>
          <Typography
            variant="span"
            className=" d-block mb-3 text-capitalize font-weight-bold"
          >
            blog
          </Typography>
          <NavLink className="text-decoration-none">
            <Typography
              variant="span"
              className="my-3 d-block  text-capitalize text-black-50 "
            >
              Company
            </Typography>
          </NavLink>
          <NavLink className="text-decoration-none">
            <Typography
              variant="span"
              className="my-3 d-block  text-capitalize text-black-50 "
            >
              Leadership
            </Typography>
          </NavLink>
          <NavLink className="text-decoration-none">
            <Typography
              variant="span"
              className="my-3 d-block  text-capitalize text-black-50 "
            >
              Diversity
            </Typography>
          </NavLink>
        </div>
        <div>
          <Typography
            variant="span"
            className=" d-block mb-3 text-capitalize font-weight-bold"
          >
            product
          </Typography>

          <NavLink className="text-decoration-none">
            <Typography
              variant="span"
              className="my-3 d-block  text-capitalize text-black-50 "
            >
              Company
            </Typography>
          </NavLink>
          <NavLink className="text-decoration-none">
            <Typography
              variant="span"
              className="my-3 d-block  text-capitalize text-black-50 "
            >
              WaveLength
            </Typography>
          </NavLink>
          <NavLink className="text-decoration-none">
            <Typography
              variant="span"
              className="my-3 d-block  text-capitalize text-black-50 "
            >
              Jobs
            </Typography>
          </NavLink>
        </div>
        <div>
          <Typography
            variant="span"
            className=" d-block mb-3 text-capitalize font-weight-bold"
          >
            workflow
          </Typography>
          <Typography
            variant="span"
            className="my-3 d-block  text-capitalize text-black-50 "
          >
            WaveLength
          </Typography>
          <Typography
            variant="span"
            className="my-3 d-block  text-capitalize text-black-50 "
          >
            Founde
          </Typography>
        </div>
        <div>
          <Typography
            variant="span"
            className=" d-block mb-3 text-capitalize font-weight-bold"
          >
            team
          </Typography>
          <Typography
            variant="span"
            className="my-3 d-block  text-capitalize text-black-50 "
          >
            Enginners
          </Typography>
          <Typography
            variant="span"
            className="my-3 d-block  text-capitalize text-black-50 "
          >
            Developers
          </Typography>
          <Typography
            variant="span"
            className="my-3 d-block  text-capitalize text-black-50 "
          >
            Marketers
          </Typography>
          <Typography
            variant="span"
            className="my-3 d-block  text-capitalize text-black-50 "
          >
            Designers
          </Typography>
          <Typography
            variant="span"
            className="my-3 d-block  text-capitalize text-black-50 "
          >
            All Team
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
