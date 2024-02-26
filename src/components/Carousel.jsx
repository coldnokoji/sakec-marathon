import React from 'react';
import './Carousel.css';








// Initialize Swiper components


import slide_image_1 from '../assets/img/slides/slide1.jpg';
import slide_image_2 from '../assets/img/slides/slide2.jpg';
import slide_image_3 from '../assets/img/slides/slide3.jpg';
import slide_image_4 from '../assets/img/slides/slide4.jpg';
import slide_image_5 from '../assets/img/slides/slide5.jpg';
import slide_image_6 from '../assets/img/slides/slide6.jpg';
import slide_image_7 from '../assets/img/slides/slide7.jpg';
import slide_image_8 from '../assets/img/slides/slide8.jpg';
import slide_image_9 from '../assets/img/slides/slide9.jpg';
import slide_image_10 from '../assets/img/slides/slide10.jpg';



const Carousel = () =>{

  

  const images = [slide_image_1, slide_image_2, slide_image_3,slide_image_4,slide_image_5,slide_image_6,slide_image_7,slide_image_8,slide_image_9,slide_image_10];
  
  // Function to generate a random cell size (between 1 and 3)
  return(
    <>
    <div className="grid-body">
    <main class="grid">
        <section class="content item1">
          <h1 class="one">SAKEC</h1>
          </section>
          <section class="content item13">
          <h1 class="two">MARATHON</h1>
          </section >
        <section class="grid-card item2">
        {/* <img src={slide_image_2} alt="" className='grid-image'/> */}
        </section>
        <section class="grid-card item3"></section>
        <section class="grid-card item4"></section>
        <section class="grid-card item5">
        {/* <img src={slide_image_10} alt="" className='grid-image'/> */}
        </section>
        <section class="grid-card item7"></section>
        <section class="grid-card item8">
        {/* <img src={slide_image_3} alt="" className='grid-image'/> */}
        </section>
        <section class="grid-card item9"></section>
        <section class="grid-card item10"></section>
        <section class="grid-card item11">
        {/* <img src={slide_image_6} alt="" className='grid-image'/> */}
        </section>
        <section class="grid-card item12">
        <h1 class="three">2024</h1>
        </section>
      </main>
      </div>
    </>
  )

}



export default Carousel;