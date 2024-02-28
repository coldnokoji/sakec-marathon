import React from "react";
import './navbar.css';
import logo from '../assets/img/logo.png';

import { useNavigate,NavLink } from "react-router-dom";
import { useState,useEffect } from "react";


const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div>
            <header className="header">
        <a href="#" className="logo">
            <img src={logo} alt="" className="Logo"/>
        </a>

        <input type="checkbox" name="" id="check"/>
        <label for="check" className="icons">
        <img id="menu-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAGxJREFUSEvtlcENwCAMA/FmjMZo3SxUlfgA/TmYhxnApxyOgiJ6EHGLwcfMW/WnOiIa0zmAJW+rOl4yGbxw7gIzp/3LcqtHqytTN4BnzrurXMp10qhm/q/XaRhwq7Vn0a3OMOCzmGF1mylT3QGvpigfXkEqFAAAAABJRU5ErkJggg=="/>
        <img id="close-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAV1JREFUSEvtlb1KxEAUhb+jVnb2PoPgG4goirJoYSEKlrZa+EAWaiEiInY2omCjqK/iD/5gcc0Ns7DIbmY2CcYi04VM7nfPmTM3oqGlhri04D9zvrX6/1htZhPAGbAj6amoMzObB3aBVUnfRXsLz9jMRoBHYAp4BmYlPfQraGadbN8pMAZcSPLngSsaLjPbAvYhv/MvwJyku96KZrYcXHHoF9CRdFkJ7B//gr8F5Tm8D3RR0lUsLFHF3QJmtg4cBeU5HJgEjoO9H8BSCtRrJoODug3gMDTj8HHAc/AJLEi6jintvh8KHOCu/AAYDUVcqZ/7bSp0aMWNgc1sM6j1Hnqtfgc8VDepqpOtTgiXX6OkRCdb3ch1KjlAospTRuY9MA28AjOJI/Nc0kqlyRV+EidZmPayYj63B64wxbaBtUo/idSEltmXnOoyxStZXTew9Misq5HW6rqcjNZpzOofTLGEHzIu/6MAAAAASUVORK5CYII="/>
        </label>

        <nav className="navbar">
            <a className="page-link" href='/'>Home</a>
            <a className="page-link" href='/about'>Marathon 2024</a>
            <a className="page-link" href='/team'>Team</a>
            <a className="page-link" href='/contact'>Contact/FAQ</a>
            <a href="https://www.townscript.com/e/sakec-marathon-2024-334200" target="blank">Register</a>
        </nav>
    </header>

        </div>
    );
}

export default Navbar;