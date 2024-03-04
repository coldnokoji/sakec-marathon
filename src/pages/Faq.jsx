import React from 'react'
import Navbar from '../components/navbar'
import './Faq.css';
import Footer from '../components/footer';

export default function Faq() {
    return (

        <>
        <Navbar/>
        <div className='faq-body'>
            <div className="main-header">
                <h1 className="main-header-title">FAQs</h1>
                <p className="main-header-desc">Frequently Asked Questions</p>
            </div>
            <div className="faq">
                <div className="faq-name">
                    <h1 className="faq-header">Have <br /> questions ?</h1>
                    <img className="faq-img" src={require("../assets/img/faq-image.jpeg")} />
                </div>
                <div className="faq-box">
                    <div className="faq-wrapper">
                        <input type="checkbox" className="faq-trigger" id="faq-trigger-1" />
                        <label className="faq-title" htmlFor="faq-trigger-1">How do I register for a marathon?</label>
                        <div className="faq-detail">
                            <p>Click on the register button on the home page.</p>
                        </div>
                    </div>
                    <div className="faq-wrapper">
                        <input type="checkbox" className="faq-trigger" id="faq-trigger-2" />
                        <label className="faq-title" htmlFor="faq-trigger-2">What is included in the race registration fee?</label>
                        <div className="faq-detail">
                            <p>The different categories of registration have different rewards. You can check the About page for more info.</p>
                        </div>
                    </div>
                    <div className="faq-wrapper">
                        <input type="checkbox" className="faq-trigger" id="faq-trigger-3" />
                        <label className="faq-title" htmlFor="faq-trigger-3">Are there medical professionals on site?</label>
                        <div className="faq-detail">
                            <p>Yes, medical professionals are there onsite with ambulances on standby as well as a physiotherapist.</p>
                        </div>
                    </div>
                    <div className="faq-wrapper">
                        <input type="checkbox" className="faq-trigger" id="faq-trigger-4" />
                        <label className="faq-title" htmlFor="faq-trigger-4">Are there awards for top finishers?</label>
                        <div className="faq-detail">
                            <p>Yes, winners will get exclusive hampers and a cash prize.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
