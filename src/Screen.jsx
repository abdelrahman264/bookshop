import React, { StrictMode } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Logo from "./components/Logo";
import Searchbar from "./components/Searchbar";
import HeaderIcons from "./components/HeaderIcons";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import { Routes } from "react-router-dom";
import Books from "./components/Books";
import AppRoutes from "./Services/AppRoutes";


const Screen =() =>{
    return(
      <div className="bg-white m-16 rounded-lg">
<Router>
      <div className="flex justify-between">
            <Logo />
            <Searchbar />
            <HeaderIcons />
          </div>
          <Navigation />
        <Routes>
          <Route path={AppRoutes.home} element={<Home/>}/>
          <Route path={AppRoutes.books} element={<Books/>}/>
        </Routes>
      </Router>
      </div>
    );
}
export default Screen;