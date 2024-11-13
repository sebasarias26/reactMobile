import { Routes, Route } from "react-router-dom";
import React from 'react'
import Menu from "../components/common/Menu/Menu.jsx";
import Home from "../components/pages/Home/Home.jsx";
import Users from "../components/pages/Users/Users.jsx";
import ListadoUsuarios from "../components/pages/ListadoUsuarios/ListadoUsuarios.jsx";

function Rutas() {
  return (
    <>
        <Menu />
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/usuario" element={ <Users /> } />
            <Route path="/listausuario" element={ <ListadoUsuarios /> } />
        </Routes>
    </>
  )
}

export default Rutas