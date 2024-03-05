import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Carousel from "../components/Carousel";

import Imagecarousel from "../components/Imagecarousel";
import Hero from "../components/hero";

const Home = () =>{
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
    return (
        <>
        <Navbar/>
       
        {/* <Carousel/> */}
        <Imagecarousel/>
        <Hero/>
        <Footer/>
        </>
    );
}

export default Home;