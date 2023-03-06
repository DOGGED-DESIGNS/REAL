import {
  Alert,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  Skeleton,
  Typography,
} from "@mui/material";

import { SearchOutlined } from "@mui/icons-material";
import { useContext, useState, useRef } from "react";

import Rentbuy from "../../Hooks/Rentbuy";

import "../../App.css";

import "./Header.scss";

import { NavLink, useNavigate } from "react-router-dom";

import Image from "../../constants";
import { Contextprovider } from "../../context/Generalprovider";

const Header = () => {
  const navigate = useNavigate();
  const { proper, realdata, dispatch, setProper, errorp, setErrorp } =
    useContext(Contextprovider);

  const { Buy } = Rentbuy();

  realdata.map((he) => {
    if (he.baths == 1) {
      console.log("yes");
    }
  });

  const [indexz, setIndexz] = useState(1);

  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [baths, setBaths] = useState(null);
  const [rooms, setRooms] = useState(null);

  // handling the click

  const handleClick = () => {
    if (location == "" && price === "" && baths === null && rooms === null) {
      setErrorp(true);
      setProper(false);
    } else {
      window.scrollTo({
        top: 1273.84375,
      });
    }
  };

  return (
    <div className=" container">
      {/* <CircularProgress />
      <Skeleton variant="rectangular" width={40} height={40} /> */}
      <div className=" header-grid">
        <div className=" write">
          <Typography
            className=" text-capitalize font-weight-bold "
            variant="h4"
          >
            Find your modern <br /> and affordable <br /> home
          </Typography>
          <Typography className=" text-black-50 d-block  my-3 " variant="span">
            this is just for a test and i will see this is wo out n and it
            ahould be and i want to see how this woruld play
          </Typography>

          <div className=" buy">
            <div className="buy__button">
              <Button
                variant="contained"
                sx={{
                  background: indexz === 1 ? "orange" : "white",
                  color: "black",
                  "&:hover": {
                    background: "orange",
                  },
                }}
                onClick={() => {
                  setIndexz(1);
                  Buy("for-rent");
                }}
              >
                {" "}
                Rent{" "}
              </Button>
              <Button
                sx={{
                  background: indexz === 2 ? "orange" : "white",
                  color: "black",
                  "&:hover": {
                    background: "orange",
                  },
                }}
                variant="contained"
                onClick={() => {
                  setIndexz(2);
                  Buy("for-sale");
                  console.log("i have been clicked");
                  console.log(realdata);
                }}
              >
                {" "}
                Buy{" "}
              </Button>
            </div>

            <div className="   shadow buy__select">
              {/* <FormControl className=" mx-2" sx={{ width: "150px" }}>
                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                <Select
                  onChange={(e) => {
                    setLocation(e.target.value);
                    if (location != "") {
                      dispatch({
                        type: "sort",
                        payload: { location: location },
                      });
                      window.scrollTo({
                        top: 1273.84375,
                      });
                    }
                  }}
                  size="small"
                  variant="outlined"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Location"
                >
                  {proper ? (
                    <Skeleton variant="rectangular" className="w-100" />
                  ) : (
                    realdata?.length > 0 &&
                    realdata?.slice(0, 5).map((lo) => {
                      return (
                        <MenuItem value={lo.externalID}>
                          {" "}
                          {lo.location.map((ll) => {
                            return `${ll.name},`;
                          })}{" "}
                        </MenuItem>
                      );
                    })
                  )}
                </Select>
              </FormControl> */}
              <FormControl className=" formz  mx-2" sx={{ width: "150px" }}>
                <InputLabel id="demo-simple-select-label">Room</InputLabel>
                <Select
                  className=""
                  onChange={(e) => {
                    e.preventDefault();
                    setRooms(e.target.value);
                    console.log(rooms);

                    console.log(e.target.value);
                    dispatch({
                      type: "room",
                      payload: { room: e.target.value },
                    });

                    window.scrollTo({
                      top: 1273.84375,
                    });
                  }}
                  size="small"
                  variant="outlined"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Room"
                >
                  <MenuItem value={1}>one</MenuItem>
                  <MenuItem value={2}>Two</MenuItem>
                  <MenuItem value={3}>Three</MenuItem>
                  <MenuItem value={4}>Four</MenuItem>
                  <MenuItem value={5}>Five</MenuItem>
                </Select>
              </FormControl>
              <FormControl className=" formz mx-2" sx={{ width: "150px" }}>
                <InputLabel id="demo-simple-select-label">Bath</InputLabel>
                <Select
                  onChange={(e) => {
                    setBaths(e.target.value);

                    console.log(baths);

                    console.log(e.target.value);
                    dispatch({
                      type: "bath",
                      payload: { bath: e.target.value },
                    });
                    window.scrollTo({
                      top: 1273.84375,
                    });
                  }}
                  size="small"
                  variant="outlined"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Bath"
                >
                  <MenuItem value={1}>one</MenuItem>
                  <MenuItem value={2}>Two</MenuItem>
                  <MenuItem value={3}>Three</MenuItem>
                  <MenuItem value={4}>Four</MenuItem>
                  <MenuItem value={5}>Five</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="formz mx-2" sx={{ width: "150px" }}>
                <InputLabel id="demo-simple-select-label">Price</InputLabel>
                <Select
                  onChange={(e) => {
                    setPrice(e.target.value);
                    console.log(realdata);
                    if (price != null) {
                      dispatch({
                        type: "price",
                        payload: { price: e.target.value },
                      });
                      window.scrollTo({
                        top: 1273.84375,
                      });
                    }
                  }}
                  size="small"
                  variant="outlined"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="price"
                >
                  {proper ? (
                    <Skeleton variant="rectangular" className="w-100" />
                  ) : (
                    realdata.length > 0 &&
                    realdata?.slice(0, 5).map((re) => {
                      return (
                        <MenuItem value={re.price}> {`$${re.price}`} </MenuItem>
                      );
                    })
                  )}
                </Select>
              </FormControl>
              <div className="butzz">
                <a href="#prop">
                  <Button
                    onClick={() => {
                      handleClick();
                    }}
                    variant="contained"
                    startIcon={<SearchOutlined />}
                  >
                    Search
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="banner">
          <div className=" img">
            <div className="img__svg">
              <div className="img__svg--div">
                <img src={Image.Bg} />
              </div>
              <div className=" shadow img__img">
                <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
