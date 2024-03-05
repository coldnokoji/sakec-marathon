import React from "react";
import './footer.css';
import logo from '../assets/img/logo.png';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer-body">

      <footer>
        <div class="content">
          <div class="top">
            <div class="logo-details">
              <i class="fab fa-slack"></i>
              <img src={logo} alt="logo" className="Logo" />
            </div>
            <div class="media-icons">
              
            </div>
          </div>
          <div class="link-boxes">
            <ul class="box">
              <li class="link_name">Contact Us</li>
              <p className="contactdetail">If you have any queries, feel free to contact us.</p>
              
              <p className="contactdetail1">sakec.marathon@sakec.ac.in</p>
            </ul>
            <ul class="box">
              <li class="link_name">Address</li>
              <p className="contactdetail">SAKEC, Chembur, Mumbai - 400088.</p>
            </ul>
            <ul class="box">
              <li class="link_name">Phone</li>
              <div className="contact1">
                <p className="contactdetail">Tanish Nandu : 9833837878</p>
                
              </div>
              <div className="contact1">
                <p className="contactdetail">Anshita Jain : 9340136961</p>
                
              </div>
              <div className="contact1">
                <p className="contactdetail">Ashish Bangari : 9372838067</p>
                
              </div>
            </ul>
            <ul class="box">
              <li class="link_name">Socials</li>
              <a className="contactdetails" href="https://www.instagram.com/sakec.marathon/?hl=en" target="blank"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA2RJREFUSEvNlluoVlUUhb+hpWAJBYmX0iKsUNDj9UXxQvWWYUhQEF7h+OCbFxSkxAuhoFEvQQ/mMYPAByvMeikQ60DiNUQpRB+kjhIESVZvOVvjsH7ZZ5+9/31+X44Lfv6Htdccc4415lhTDNPSMOHyYANHxERgKjCygaH/gGuSbjUxWVtxREwA9gOvAI83BSrt/wl8DWytS6ISOCIMdjQBP5ID/gNcBFxRuzUKmAOMzh/9Dbwh6ZvyoUHAETEGuA644p70/xFwXlITaH/siHgIWATsyv83geck/VsErwL2gR2uWNKbHVJs4JUJVJKORMRJYKmTkLSzCfg34ElXLOn3ToAz6JF8Zm2+np+APklP1QJnQVmRv0iaVgUaEU5qObDAzAI/Al9YRBGxCvgkn1snqSci7gCPAuMk/dGKOYDqiLAwzgO9knxPA1ZErE9BDgBjS1t/ARslHYqINaYauCzpbGLBenkWmCHpch2wwb53K0haVgyeMt+cQQ3yAXABeBiYadBclcG9d29FxCWDmiFJZqd/lSt+Gfg2U7ei9VFEzE79fBYwVXMl9ZWCT8mJmIk5kq4UzvqOu6xwSb1NwMcSLa8XDu9OPfwOsEnS+zV3vw3YB7wt6d3CWTPjxBdL+qEO+CXgu4qKvwJM/TJJdqRBK1Fqho75V0ramrF2lko6VQfsnnPvnZD0aiHrL7OSl0s63iGwr2he0s6Lkhy78o5bwMcluWX6V0TYUGwsWyS9VwO8PYnNFG+XtLdw9px1kQpaIsnCbQtcrniyezuZvm1vVoW4ns5mYbt8ofgwRMSQxLXQPVzTThuSCXyYqrbxu2VciR8FK9btZI/vTg51sKR4K3x6ijk/tajPVFZs9VmFdQbSnczDVFcZiBX/cfkaCgbSJck9XQlsP/0VuCHpmZq7tGW+lvrd7PjFOp1M5POqdzciRuTr8TM5WZLfgUpgTxi3swtNGsokUZVcQVhWs1Xt63ms+LRWPYumax3wmaS32gVu2osIq9g23CPJMe+tKuAngKt53PHksAc4I+luE1BuvdYg4HO+Do9BzxdfJn9XN/qsBg4XgO539HGIVZI+LSfdbthbbG9Oz6QdzCLpZJmdE+6Aomm0pbqiHcanMahyKGiTyc9N08uDPdB3wvFQvx22iv8H0cNdLvG6xLkAAAAASUVORK5CYII="/></a>
            </ul>
          </div>

        </div>
        <div class="bottom-details">
          <div class="bottom_text">
            <span class="copyright_text">Copyright © 2024 <a href="#">Sakec-Marathon</a>All rights reserved</span>
           
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;