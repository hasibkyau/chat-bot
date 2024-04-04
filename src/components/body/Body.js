import React from "react";
import Contact from "./Contact";
import About from "./about/About";
import { Route, Routes } from "react-router-dom"
import Home from "./Home/Home";
import Menu from "./Menu";
import Portfolio from "./portfolio/Portfolio";
import NinjaTailor from "./ninjatailor/NinjaTailor";
import SignUp from "../signup/SignUp";

const Body = () =>{
    return(
        <div>
            <Routes>
                <Route path = "/login" element = {<SignUp/>}/>
                <Route path = "/" element = {<Home/>}/>
                {/* <Route path = "/menu" element={<Menu/>}/> */}
                {/* <Route path = "/contact" element={<Contact/>}/> */}
                {/* <Route path = "/about" element={<About/>}/> */}
                {/* <Route path = "/portfolio" element = {<Portfolio/>}/> */}
                {/* <Route path = "/ninjatailor" element = {<NinjaTailor/>}/> */}
            </Routes>
        </div>
    );
}

export default Body;