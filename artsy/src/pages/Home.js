import React from "react";
import Navbar from "../components/Navbar";
// import Image1 from '../assets/images/homepage/'

const Home = () => {
  return (
    <div>
      <Navbar />

      <h2 className="text-center text-black font-bold text-6xl">
        Photography is poetry & beautiful untold stories
      </h2>
      <p className="font-normal text-lg text-center p-10">
        Flip through more than 10,000 vintage shots, old photograghs, historic
        images and captures seamlessly in one place. Register to get top access.
      </p>

      <div className="images">
        
      </div>
    </div>
  );
};

export default Home;
