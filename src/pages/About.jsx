import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import './About.css';
import Infocard from "../components/Infocard";
import Navbartwo from "../components/Navbartwo";

const About = () =>{
    return (
        <>
        <Navbartwo/>

        
        <div className="about-body">
        <h1>Guide to Marathon 2024</h1>
        <div className="timeline">
        <div class="about-container left-about-container">
            <div class="text-box">
                <h2>Register</h2>
                <p>1. Visit the marathon website to Register. <br/>
2. Fill out the registration form with your personal details. <br/>
3. Select your desired race category (10KM, 5KM, 2.5KM). <br/>
4. Confirm your registration details and submit. <br/>
5. Wait for a confirmation email or message.</p>
                <span class="left-about-container-arrow"></span>
            </div>
        </div>
        <div class="about-container right-about-container">
            <div class="text-box">
                <h2>Payment</h2>
                <p>1. After receiving the confirmation message, visit the payment portal provided.<br/>
2. Choose your preferred payment method (credit/debit card, bank transfer, etc.).<br/>
3. Follow the instructions to complete the payment process.<br/>
4. Check your email for a payment confirmation.</p>
                <span class="right-about-container-arrow"></span>
            </div>
        </div>
        <div class="about-container left-about-container">
            <div class="text-box">
                <h2>T-shirt Collection</h2>
                <p>1. A few days before the event, check the marathon website or your email for details on t-shirt collection.<br/>
2. Visit the designated location on the specified date and time to collect your t-shirt.<br/>
3. Show your registration confirmation or ID for verification.<br/>
4. Collect your t-shirt and any other goodies provided.</p>
                <span class="left-about-container-arrow"></span>
            </div>
        </div>
        <div class="about-container right-about-container">
            <div class="text-box">
                <h2>Event Day Check-in</h2>
                <p>1. Arrive at the event venue at the designated time.<br/>
2. Proceed to the check-in area.<br/>
3. Present your registration confirmation or ID.<br/>
4. Collect your race bib and timing chip.<br/>
5. Attend the pre-race briefing, if scheduled.</p>
                <span class="right-about-container-arrow"></span>
            </div>
        </div>
        <div class="about-container left-about-container">
            <div class="text-box">
                <h2>Race</h2>
                <p>1. Line up at the start line according to your race category.<br/>
2. Follow the race route as marked.<br/>
3. Stay hydrated and pace yourself.<br/>
4. Enjoy the scenic views and the camaraderie of fellow runners.<br/>
5. Cross the finish line and celebrate your accomplishment.</p>
                <span class="left-about-container-arrow"></span>
            </div>
        </div>
        <div class="about-container right-about-container">
            <div class="text-box">
                <h2>Prizes & Goodies</h2>
                <p>1. Listen for announcements regarding prize distribution.<br/>
2. If you have won a prize, proceed to the prize distribution area.<br/>
3. Collect your prize and any additional goodies.<br/>
4. Celebrate with fellow participants and take photos.</p>
                <span class="right-about-container-arrow"></span>
            </div>
        </div>
        <div class="about-container left-about-container">
            <div class="text-box">
                <h2>Return with Great Memories</h2>
                <p>1. Take some time to reflect on your marathon experience.<br/>
2. Share your experience on social media, if desired.<br/>
3. Cherish the memories and the sense of achievement.<br/>
4. Start planning for your next marathon adventure!</p>
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