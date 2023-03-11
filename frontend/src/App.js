import React from "react";
import EditBooking from "./components/EditBooking/Edit";
import './index.css';
import Home from "./components/home/home";
import NavBar from "./navbar/navbar";
import { Route, Routes } from "react-router-dom";
import DeleteBooking from "./components/DeleteBooking/DeleteBooking";


// import Detail from "./components/DetailBooking/DetailBooking";
import All from "./components/AllBookings/allBookings";

import Details from "./components/DetailPage/Detail";
const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/edit" element={<EditBooking />} />

        <Route path="/delete" element={<DeleteBooking />} />

        <Route path="/details" element={<Details />} />

        <Route path="/allBookings" element={<All />} />
      </Routes>
    </div>
  );
};

export default App;
