import React from 'react';
import './hero.css';

import banner from '../assets/img/banner.png';

const Hero = () => {
    

    return (

        <>
        
        <div className='hero-body'>
            <h2 className='hero-line'>Owing to the previous success of SAKEC Marathon 2023
                with a staggering number of participants amounting
                over 450 from Chembur and nearby areas, we, the
                organising team of SAKEC Marathon 2023 are obliged to
                present to you
            </h2>
            <h1>SAKEC MARATHON 2024</h1>
            <h2 className='hero-line'>Whether you're a seasoned runner or a novice lace-tightener,
                we've got an event for you! Here's why Marathon Hub is the
                perfect place to kickstart your running journey:
            </h2>
            
            <h2 className='hero-heading'>Beginner-Friendly :</h2>
            <p>Not ready for a full marathon yet? No problem! Join our
                beginner-friendly runs or sign up for our couch-to-5K
                program. We're here to help you take your first steps
                toward a healthier lifestyle.</p>

            <h2 className='hero-heading'>Medals and Rewards :</h2>
            <p>Crossing the finish line is just the beginning. Every
                participant receives a commemorative medal and the
                satisfaction of achieving a personal goal. Plus, we
                offer exciting prizes for top finishers!</p>

            <h2 className='hero-heading'>Social Connection :</h2>
            <p>Running is more fun with friends! Connect with fellow
                runners through our social media channels and local
                running groups. Share training tips, motivation, and
                encouragement to keep each other going strong.</p>

            <h2 className='hero-heading'>Professional Support :</h2>
            <p>Our team of experienced organizers and volunteers is
                here to make sure your race day experience is
                seamless and enjoyable. From race packets to
                hydration stations, we've got all the details covered.</p>

            <h2 className='hero-heading'>Community Involvement :</h2>
            <p>We believe in giving back to the
                community. A portion of our proceeds goes toward local
                charities and organizations dedicated to promoting
                health and wellness.</p>
                </div>
            <div class="banner-wrapper">
                <img src={banner} alt="Avatar" class="banner" style={{'width':'100%'}} />
                
                <div class="middle">
                    <div class="text"><a href="https://www.townscript.com/e/sakec-marathon-2024-334200" target='blank'> Register now!!</a></div>
                </div>
                
            </div>
        </>
        
    );
}

export default Hero;