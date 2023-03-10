import React from "react";
import EditBooking from "./components/EditBooking/Edit";
import './index.css';
import Home from "./components/home/home";
import NavBar from "./navbar/navbar";
import { Route, Routes } from "react-router-dom";
import DeleteBooking from "./DeleteBooking/DeleteBooking";
const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/edit" element={<EditBooking />} />

        <Route path="/delete" element={<DeleteBooking />} />
      </Routes>
    </div>
  );
};

export default App;
