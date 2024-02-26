import React from "react";
import './Team.css';
import Navbar from "../components/navbar";
import Navbartwo from "../components/Navbartwo";


const Team = () => {
    return (
        <>
            <Navbartwo/>

            <h1 className="team-h1">Directors</h1>
            <div className="body">
                <div class="team-card">
                    <img src={require('../assets/img/profile/tanish.jpg')} />
                    <h5>Market Research Analyst</h5>
                    <h3>Stephen Brown</h3>
                </div>
                <div class="team-card">
                    <img src={require('../assets/img/profile/tanish.jpg')} />
                    <h5>Market Research Analyst</h5>
                    <h3>Stephen Brown</h3>
                </div>
                <div class="team-card">
                    <img src={require('../assets/img/profile/tanish.jpg')} />
                    <h5>Market Research Analyst</h5>
                    <h3>Stephen Brown</h3>
                </div>
            </div>
            <div className="hori-line">
                <hr/>
            </div>
            <h1 className="team-h1">Co-Directors</h1>
            <div className="body">
                <div class="team-card">
                    <img src={require('../assets/img/profile/tanish.jpg')} />
                    <h5>Market Research Analyst</h5>
                    <h3>Stephen Brown</h3>
                </div>
                <div class="team-card">
                    <img src={require('../assets/img/profile/tanish.jpg')} />
                    <h5>Market Research Analyst</h5>
                    <h3>Stephen Brown</h3>
                </div>

            </div>

            <div className="hori-line">
                <hr/>
            </div>

            <h1 className="team-h1">Core Team</h1>
            <div className="body">
                <div class="team-card">
                    <img src={require('../assets/img/profile/tanish.jpg')} />
                    <h5>Market Research Analyst</h5>
                    <h3>Stephen Brown</h3>
                </div>
                <div class="team-card">
                    <img src={require('../assets/img/profile/tanish.jpg')} />
                    <h5>Market Research Analyst</h5>
                    <h3>Stephen Brown</h3>
                </div>
                <div class="team-card">
                    <img src={require('../assets/img/profile/tanish.jpg')} />
                    <h5>Market Research Analyst</h5>
                    <h3>Stephen Brown</h3>
                </div>
            </div>
            <div className="body">
                <div class="team-card">
                    <img src={require('../assets/img/profile/tanish.jpg')} />
                    <h5>Market Research Analyst</h5>
                    <h3>Stephen Brown</h3>
                </div>
                <div class="team-card">
                    <img src={require('../assets/img/profile/tanish.jpg')} />
                    <h5>Market Research Analyst</h5>
                    <h3>Stephen Brown</h3>
                </div>
                <div class="team-card">
                    <img src={require('../assets/img/profile/tanish.jpg')} />
                    <h5>Market Research Analyst</h5>
                    <h3>Stephen Brown</h3>
                </div>
            </div>
            <div className="body">
                <div class="team-card">
                    <img src={require('../assets/img/profile/tanish.jpg')} />
                    <h5>Market Research Analyst</h5>
                    <h3>Stephen Brown</h3>
                </div>
                <div class="team-card">
                    <img src={require('../assets/img/profile/tanish.jpg')} />
                    <h5>Market Research Analyst</h5>
                    <h3>Stephen Brown</h3>
                </div>
                <div class="team-card">
                    <img src={require('../assets/img/profile/tanish.jpg')} />
                    <h5>Market Research Analyst</h5>
                    <h3>Stephen Brown</h3>
                </div>
            </div>
        </>
    )
}

export default Team;