import Card from "@mui/material/Card";
import { Button, Container, List, TextField, Typography } from "@mui/material";
import "./App.css";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/:id" element={<Single />} />
          </Route>
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
};

export default App;
