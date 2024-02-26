import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Carousel from "../components/Carousel";
import Navbartwo from "../components/Navbartwo";

const Home = () =>{
    return (
        <>
        {/* <Navbar/> */}
        <Navbartwo/> 
        <Carousel/>
        
        <Footer/>
        </>
    );
}

export default Home;