import { Routes, Route } from "react-router-dom";
import React from 'react'
import Menu from "../components/common/Menu/Menu.jsx";
import Home from "../components/pages/Home/Home.jsx";

function Rutas() {
  return (
    <>
        <Menu />
        <Routes>
            <Route path="/" element={ <Home /> } />
        </Routes>
    </>
  )
}

export default Rutas