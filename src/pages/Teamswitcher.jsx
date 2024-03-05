import React, { useEffect, useState } from 'react'
import Team2024, { Team2022, Team2023 } from './Team';
import './Teamswitcher.css';

export default function Teamswitcher() {
  
    var [show, setShow] = useState(2024);

    useEffect(()=>{
      window.scrollTo(0,0);
    },[]);
    
    return (
      <div className="switcher">
        <div class="team-change">
    <button class="team-change-btn team-change-btn1" onClick={() => setShow(2022)}>2022</button>
    <button class="team-change-btn team-change-btn2" onClick={() => setShow(2023)}>2023</button>
    <button class="team-change-btn team-change-btn3" onClick={() => setShow(2024)}>2024</button>
  </div>
        
        {show == 2022 ? <Team2022/> : show == 2023 ? <Team2023/> : <Team2024/>}
      </div>
    );
  }
    
      
    
  

