import React from "react";
import './navbar.css';
import logo from '../assets/img/logo.png';

import { useNavigate,NavLink } from "react-router-dom";
import { useState,useEffect } from "react";


const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div>
            <nav>

                
                <div className="navWrapper">
                    <div>
                        <div><img src={logo} alt="Logo" className="Logo" /></div>
                        
                    </div>
                    <div className="NavlinkWrapper">
                        <NavLink className="navlink" to="/" >Home</NavLink>
                        <NavLink className="navlink" to="/about" >Guide</NavLink>
                        <NavLink className="navlink" to="/team" >Team</NavLink>
                        <button class="button-29" role="button">Register</button>    
                    </div>
                </div>

            </nav>

        </div>
    );
}

export default Navbar;