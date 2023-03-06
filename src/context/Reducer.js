import { SatelliteAlt } from "@mui/icons-material";
import React from "react";

const Reducer = () => {
  const Real = (state, action) => {
    switch (action.type) {
      case "sort":
        return state.filter((fil) => {
          if (fil.externalID === action.payload.location) {
            return fil;
          }
        });

      case "put":
        return action.payload;
      case "bath":
        return state.filter((fil) => {
          if (fil.baths === action.payload.bath) {
            return fil;
          }
        });
      case "room":
        return state.filter((fil) => {
          console.log(fil.rooms);
          console.log(action.payload.room);
          if (fil.rooms === action.payload.room) {
            return fil;
          }
        });
      case "price":
        return state.filter((fil) => {
          if (fil.price === action.payload.price) {
            return fil;
          }
        });
      default:
        return [{ test: "we are moving forward so fast" }];
    }
  };
  return { Real };
};

export default Reducer;
