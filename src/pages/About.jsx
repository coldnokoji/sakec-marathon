import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import './About.css';
import Infocard from "../components/Infocard";


const About = () =>{
    return (
        <>
       

        <Navbar/>
        <div className="about-body">
        <h1>Guide to Marathon 2024</h1>
        <div className="timeline">
        <div class="about-container left-about-container">
            <div class="text-box">
                <h2>Register</h2>
                <p>Visit website -&gt; Fill out registration form -&gt; Select race category -&gt; Confirm details -&gt; Wait for confirmation email.</p>
                <span class="left-about-container-arrow"></span>
            </div>
        </div>
        <div class="about-container right-about-container">
            <div class="text-box">
                <h2>Payment</h2>
                <p>Receive confirmation message-&gt;  Access payment portal -&gt; Follow payment process instructions -&gt; Check email for confirmation.</p>
                <span class="right-about-container-arrow"></span>
            </div>
        </div>
        <div class="about-container left-about-container">
            <div class="text-box">
                <h2>T-shirt Collection</h2>
                <p>Check website or email for instructions -&gt; Visit designated location at specified time -&gt; Present confirmation or ID -&gt; Collect t-shirt and goodies.</p>
                <span class="left-about-container-arrow"></span>
            </div>
        </div>
        <div class="about-container right-about-container">
            <div class="text-box">
                <h2>Event Day Check-in</h2>
                <p>Check-in at designated venue -&gt; Present registration confirmation or ID -&gt; Collect race bib and timing chip -&gt; Attend pre-race briefing if scheduled.</p>
                <span class="right-about-container-arrow"></span>
            </div>
        </div>
        <div class="about-container left-about-container">
            <div class="text-box">
                <h2>Race</h2>
                <p>
Line up -&gt; follow the route -&gt; stay hydrated -&gt; enjoy the scenery and camaraderie -&gt; celebrate your accomplishment!</p>
                <span class="left-about-container-arrow"></span>
            </div>
        </div>
        <div class="about-container right-about-container">
            <div class="text-box">
                <h2>Prizes & Goodies</h2>
                <p>Listen for announcements -&gt; Visit prize distribution area -&gt; Collect prize and goodies -&gt; Celebrate and share memories.</p>
                <span class="right-about-container-arrow"></span>
            </div>
        </div>
        <div class="about-container left-about-container">
            <div class="text-box">
                <h2>Return with Great Memories</h2>
                <p>Reflect on marathon experience-&gt;Share on social media-&gt;Cherish memories and achievement-&gt;Plan next marathon adventure</p>
                <span class="left-about-container-arrow"></span>
            </div>
        </div>
    </div>
        <Infocard/>
        
        <Footer/>
        </div>
        </>

    );

}
export default About;