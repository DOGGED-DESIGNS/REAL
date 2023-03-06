import { useState, useContext } from "react";

import { Contextprovider } from "../context/Generalprovider";

import axios from "axios";

const Rentbuy = () => {
  const { proper, realdata, dispatch, singleLoad, setProper, setSingleLoad } =
    useContext(Contextprovider);

  const [loadingzz, setLoadingzz] = useState(false);
  const [error, setError] = useState(false);
  const [dataz, setDataz] = useState({});

  const Sing = async (take) => {
    setSingleLoad(true);
    try {
      const data = await axios.get(
        "https://bayut.p.rapidapi.com/properties/detail",

        {
          params: { externalID: take },
          headers: {
            "X-RapidAPI-Key":
              "e7253cdbb6msh260e7f3246d0bf7p1bf77djsne4d1a23706cf",
            "X-RapidAPI-Host": "bayut.p.rapidapi.com",
          },
        }
      );

      setDataz(data.data);

      setSingleLoad(false);
    } catch (err) {
      setSingleLoad(true);
      console.log("there was an error while fetching single");
    }
  };
  const Buy = async (take2) => {
    try {
      const data = await axios.get(
        "https://bayut.p.rapidapi.com/properties/list",

        {
          params: {
            locationExternalIDs: "5002,6020",
            purpose: take2,
            hitsPerPage: "25",
            page: "0",
            lang: "en",
            sort: "city-level-score",
            rentFrequency: "monthly",
            categoryExternalID: "4",
          },
          headers: {
            "X-RapidAPI-Key":
              "e7253cdbb6msh260e7f3246d0bf7p1bf77djsne4d1a23706cf",
            "X-RapidAPI-Host": "bayut.p.rapidapi.com",
          },
        }
      );

      setProper(false);
      dispatch({ type: "put", payload: data.data.hits });
      console.log(data.data);
    } catch (err) {
      setError(true);
      setLoadingzz(false);
      // console.log(err.response.data);
      console.log("there was and erro");
    }
  };

  return { loadingzz, setLoadingzz, dataz, Buy, Sing };
};

export default Rentbuy;
