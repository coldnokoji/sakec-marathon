// carousel code
import slide1 from '../assets/img/slides/slide1.jpg';
import slide2 from '../assets/img/slides/slide2.jpg';
import slide3 from '../assets/img/slides/slide3.jpg';
import slide4 from '../assets/img/slides/slide4.jpg';
import slide5 from '../assets/img/slides/slide5.jpg';
import slide6 from '../assets/img/slides/slide6.jpg';
import slide7 from '../assets/img/slides/slide7.jpg';
import slide8 from '../assets/img/slides/slide8.jpg';
import slide9 from '../assets/img/slides/slide9.jpg';
import slide10 from '../assets/img/slides/slide10.jpg';
import './Imagecarousel.css';
import { useState,useEffect } from 'react';

function Imagecarousel() {
  //   const [counter, setCounter] = useState(1);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     document.getElementById('radio' + counter).checked = true;
  //     setCounter((prevCounter) => (prevCounter % 10) + 1);
  //   }, 3000);

  //   return () => clearInterval(intervalId); // Clear interval on component unmount

  // }, [counter]);

    return (
        <>
        {/* <div className='carousel-body'>
        <div className="slider">
        <div className="slides">
        
          <input type="radio" name="radio-btn" id="radio1"/>
          <input type="radio" name="radio-btn" id="radio2"/>
          <input type="radio" name="radio-btn" id="radio3"/>
          <input type="radio" name="radio-btn" id="radio4"/>
          <input type="radio" name="radio-btn" id="radio5"/>
          <input type="radio" name="radio-btn" id="radio6"/>
          <input type="radio" name="radio-btn" id="radio7"/>
          <input type="radio" name="radio-btn" id="radio8"/>
          <input type="radio" name="radio-btn" id="radio9"/>
          <input type="radio" name="radio-btn" id="radio10"/>
       
          <div className="slide first">
            <img src={slide1} alt=""/>
          </div>
          <div className="slide">
            <img src={slide2} alt=""/>
          </div>
          <div className="slide">
            <img src={slide3} alt=""/>
          </div>
          <div className="slide">
            <img src={slide4} alt=""/>
          </div>
          <div className="slide">
            <img src={slide5} alt=""/>
          </div>
          <div className="slide">
            <img src={slide6} alt=""/>
          </div>
          <div className="slide">
            <img src={slide7} alt=""/>
          </div>
          <div className="slide">
            <img src={slide8} alt=""/>
          </div>
          <div className="slide">
            <img src={slide9} alt=""/>
          </div>
          <div className="slide">
            <img src={slide10} alt=""/>
          </div>
   
          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
            <div className="auto-btn5"></div>
            <div className="auto-btn6"></div>
            <div className="auto-btn7"></div>
            <div className="auto-btn8"></div>
            <div className="auto-btn9"></div>
            <div className="auto-btn10"></div>
          </div>
         
        </div>
        
        <div className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
          <label htmlFor="radio5" className="manual-btn"></label>
          <label htmlFor="radio6" className="manual-btn"></label>
          <label htmlFor="radio7" className="manual-btn"></label>
          <label htmlFor="radio8" className="manual-btn"></label>
          <label htmlFor="radio9" className="manual-btn"></label>
          <label htmlFor="radio10" className="manual-btn"></label>
        </div>
    
      </div>
    </div> */}

<div class="slider">
    <div class="img-slider"></div>
  </div>
        </>
    );
}

export default Imagecarousel;