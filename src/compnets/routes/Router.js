import React from "react";
import {  Routes, Route,Navigate } from "react-router-dom"
import Dashboard from '../Pages/Dashboard';
import Bookings from '../Pages/Bookings';
import SellCar from '../Pages/SellCar';
import Settings from '../Pages/Settings';
const Router = () => {
  return  <Routes>
    <Route path="/" element={<Navigate  to="/dashboard"element={<Dashboard/>}/>}/>
      
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/bookings" element={<Bookings/>}/>
      <Route path="/sell-car" element={<SellCar/>}/>
      <Route path="/settings" element={<Settings/>}/>

    </Routes>


};

export default Router;

