import { useContext } from "react";

import { Button, IconButton, Typography } from "@mui/material";

import { Close, Login, Menu } from "@mui/icons-material";

import "../../App.css";

import "./Nav.scss";
import { NavLink } from "react-router-dom";
import { Contextprovider } from "../../context/Generalprovider";
import Small from "../small/Small";

const Nav = () => {
  const {
    proper,
    realdata,
    dispatch,
    setProper,
    error,
    setErrorp,
    errorp,
    small,
    setSmall,
  } = useContext(Contextprovider);

  return (
    <>
      {small && <Small />}

      <nav className="navz bg-white">
        <div className=" p-3 d-flex container">
          <div className="logo">
            <Typography variant="h6" className=" font-weight-bold">
              {" "}
              Dogged Realtor{" "}
            </Typography>
          </div>
          <div
            className=" m-auto d-flex justify-content-between "
            style={{ width: "400px" }}
          >
            <div>
              <NavLink className="navzz text-decoration-none text-black-50   ">
                <span>Home</span>
              </NavLink>
            </div>
            <div>
              <NavLink className="navzz text-decoration-none text-black-50   ">
                <span>About</span>
              </NavLink>
            </div>
            <div>
              <NavLink className="navzz text-decoration-none text-black-50   ">
                <span>Contact</span>
              </NavLink>
            </div>
          </div>

          <div className=" d-flex">
            <Button size="small" className=" mx-2" variant="contained">
              sign_up
            </Button>
            <Button size="small" className=" mx-2" variant="outlined">
              log_in
            </Button>
          </div>
        </div>
      </nav>
      <nav className="navzz2 p-4 bg-white  ">
        <div className="logo">
          <Typography variant="h6" className=" font-weight-bold">
            {" "}
            Dogged Realtor{" "}
          </Typography>
        </div>

        <div>
          <IconButton
            onClick={() => {
              setSmall(!small);
            }}
          >
            {small ? <Close fontSize="small" /> : <Menu fontSize="small" />}
          </IconButton>
        </div>
      </nav>
    </>
  );
};

export default Nav;
