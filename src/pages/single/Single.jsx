import {
  Button,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useContext, useEffect } from "react";

import { useParams } from "react-router-dom";

import "../../App.css";
import { Contextprovider } from "../../context/Generalprovider";
import Rentbuy from "../../Hooks/Rentbuy";

import "./Single.scss";

const Single = () => {
  const {
    proper,
    realdata,
    dispatch,
    setProper,
    error,
    setErrorp,
    errorp,
    singleLoad,
    setSingleLoad,
  } = useContext(Contextprovider);

  const { dataz, Sing } = Rentbuy();

  const { id } = useParams();

  useEffect(() => {
    Sing(id);
    console.log(singleLoad);
  }, []);

  if (singleLoad) {
    return (
      <div className=" container">
        <CircularProgress className=" m-auto" />
      </div>
    );
  }

  return (
    <div className=" container">
      <div className=" single">
        <div className=" p-3 shadow bg-white single__img ">
          <img src={dataz?.coverPhoto?.url} />
        </div>

        <Typography
          variant="h5"
          className="mt-5 mb-3 font-weight-bold text-capitalize text-center
         "
        ></Typography>

        <List>
          <ListItem divider={true}>
            <ListItemText>
              <Typography
                variant="span"
                className=" mb-4 d-block text-center text-black-50
         "
              >
                <span className=" font-weight-bold"> purpose: </span>{" "}
                {dataz?.purpose}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem divider={true}>
            <ListItemText>
              <Typography
                variant="span"
                className=" mb-4 d-block text-center text-black-50
         "
              >
                <span className=" font-weight-bold"> price: </span>{" "}
                {dataz?.price}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem divider={true}>
            <ListItemText>
              <Typography
                variant="span"
                className=" mb-4 d-block text-center text-black-50
         "
              >
                <span className=" font-weight-bold"> rentFrenquency: </span>{" "}
                {dataz?.rentFrequency}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem divider={true}>
            <ListItemText>
              <Typography
                variant="span"
                className=" mb-4 d-block text-center text-black-50
         "
              >
                <span className=" font-weight-bold"> rooms: </span>{" "}
                {dataz.rooms}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem divider={true}>
            <ListItemText>
              <Typography
                variant="span"
                className=" mb-4 d-block text-center text-black-50
         "
              >
                <span className=" font-weight-bold"> baths: </span>{" "}
                {dataz.baths}
              </Typography>
            </ListItemText>
          </ListItem>
        </List>

        <Button variant="contained" className=" m-auto d-block mt-4">
          {" "}
          contact us now{" "}
        </Button>
      </div>
    </div>
  );
};

export default Single;
