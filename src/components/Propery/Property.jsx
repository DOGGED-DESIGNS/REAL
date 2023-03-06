import {
  ArrowForward,
  ArrowRight,
  LocationOnOutlined,
} from "@mui/icons-material";
import { Alert, Chip, CircularProgress, Fab, Typography } from "@mui/material";
import { useContext, useRef, useEffect } from "react";
import { Contextprovider } from "../../context/Generalprovider";
import { NavLink } from "react-router-dom";

import Rentbuy from "../../Hooks/Rentbuy";

import "../../App.css";

import "./Property.scss";

const Property = () => {
  const testRef = useRef(null);
  const { proper, realdata, dispatch, setProper, error, setErrorp, errorp } =
    useContext(Contextprovider);

  const { loadingzz, data } = Rentbuy();

  useEffect(() => {}, []);

  if (errorp) {
    return (
      <div className=" container" id="prop">
        <div className=" property-cover">
          <Alert severity="warning" sx={{ width: "400px" }} className=" m-auto">
            please fill all the form fields
          </Alert>
        </div>
      </div>
    );
  }

  if (proper) {
    return (
      <div className=" container" id="prop" ref={testRef}>
        <div className=" property-cover">
          <CircularProgress className=" m-auto" />
        </div>
      </div>
    );
  }

  return (
    <div className=" container" id="prop">
      <div className="property-cover">
        {realdata?.length === 0 ? (
          <Alert severity="warning" sx={{ width: "400px" }} className=" m-auto">
            no result found Please click on rent of buy
          </Alert>
        ) : (
          realdata?.map((re) => {
            return (
              <div>
                <div className=" property">
                  <img src={re.coverPhoto.url} />
                  <Chip
                    className=" font-weight-bold text-capitalize chip"
                    label={re.purpose}
                  />

                  <div className="pad pl-2 d-flex flex-column   pt-2 bg-white ">
                    <Typography
                      variant="span"
                      className=" mb-2 d-block text-capitalize font-weight-bold"
                    >
                      {re.title_l2}
                    </Typography>

                    <div className=" d-flex flex-grow-1 ">
                      <LocationOnOutlined
                        className=" text-black-50"
                        size="small"
                      />
                      <Typography variant="span" className=" text-black-50">
                        {" "}
                        {re.location.map((lo) => {
                          return `${lo.name_l2},`;
                        })}
                      </Typography>
                    </div>
                    <div className=" mt-auto  d-flex align-items-center ">
                      <span
                        className=" flex-grow-1"
                        style={{ color: "orange" }}
                      >
                        {" "}
                        {`$${re.price}`}
                      </span>
                      <NavLink to={`/${re.externalID}`}>
                        <Fab className="fab" sx={{}} size="small">
                          <ArrowForward />
                        </Fab>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Property;
