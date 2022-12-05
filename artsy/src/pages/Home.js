import React from "react";
import Navbar from "../components/Navbar";
import Image1 from "../assets/images/homepage/image1.png";
import Image2 from "../assets/images/homepage/image2.png";
import Image3 from "../assets/images/homepage/image3.png";
import Image4 from "../assets/images/homepage/image4.png";
import Image5 from "../assets/images/homepage/image5.png";
import Image6 from "../assets/images/homepage/image6.png";
import Image7 from "../assets/images/homepage/image7.png";
import profile1 from "../assets/images/homepage/profile1.png";
import profile2 from "../assets/images/homepage/profile2.png";
import profile3 from "../assets/images/homepage/profile3.png";
import profile4 from "../assets/images/homepage/profile4.png";
import profile5 from "../assets/images/homepage/profile5.png";
import { CgArrowRight } from "react-icons/cg";

const Home = () => {
  return (
    <div className="font-serif">
      <Navbar />

      {/* Landing page */}
      <div className="home">
        <h2 className="text-center text-black font-bold text-6xl">
          Photography is poetry & beautiful untold stories
        </h2>
        <p className="font-normal text-2xl text-center p-10">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>

        <div className="images flex">
          <img
            src={Image1}
            alt="Image1"
            style={{ height: "70%", width: "100%", marginTop: "70px" }}
          />
          <img
            src={Image2}
            alt="Image2"
            style={{ height: "70%", width: "100%", marginTop: "40px" }}
          />
          <img
            src={Image3}
            alt="Image3"
            style={{ height: "70%", width: "100%", marginBottom: "50px" }}
          />
          <img
            src={Image4}
            alt="Image4"
            style={{ height: "70%", width: "100%", marginTop: "40px" }}
          />
          {/* <img
            src={Image5}
            alt="Image5"
            style={{height: "30%", width: "80%", marginTop: "20px", marginBottom: "20px" }}
          /> */}
        </div>
      </div>
      {/* Landing page ends */}

      {/* Features */}
      <div className="features">
        <h4 className="text-black text-4xl p-8">Featured Products</h4>
        <hr
          className="p-6"
          style={{
            width: "85%",
            marginLeft: "5%",
            borderTop: "1px solid black",
          }}
        />
        {/* featured products */}
        <div className="flex-row p-6">
          <div className="feature1 flex pb-8">
            <img src={Image5} alt="Image5" />
            <div className="flex-row">
              <h4 className="text-black text-3xl p-6">The Boolean Egyptian</h4>
              <p className="text-black text-xl p-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae elit libero, a pharetra augue. Nullam id dolor id nibh
                ultricies vehicula ut id elit. Donec sed odio dui. Donec
                ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
                libero, a pharetra augue. Nullam id dolor id nibh ultricies
                vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla
                non metus auctor fringilla.
              </p>

              <div className="flex">
                <div className="flex profiles pl-6">
                  <img className="profile" src={profile1} alt="Profile 1" />
                  <img className="profile" src={profile2} alt="Profile 2" />
                  <img className="profile" src={profile3} alt="Profile 3" />
                  <img className="profile" src={profile4} alt="Profile 4" />
                  <img className="profile" src={profile5} alt="Profile 5" />
                </div>
                <p className="p-4 text-lg">64 major creators</p>
                <div
                  className="pt-4"
                  style={{
                    border: "1px solid black",
                    fontSize: "20px",
                    width: "50px",
                    borderRadius: "50%",
                  }}
                >
                  <CgArrowRight className="arrow text-center ml-3" />
                </div>
              </div>
            </div>
          </div>

          <hr
            style={{
              width: "85%",
              marginLeft: "5%",
              borderTop: "1px solid black",
            }}
          />

          <div className="feature2 flex pt-8 pb-8">
            <div className="flex-row">
              <h4 className="text-black text-3xl p-6">The Boolean Egyptian</h4>
              <p className="text-black text-xl p-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae elit libero, a pharetra augue. Nullam id dolor id nibh
                ultricies vehicula ut id elit. Donec sed odio dui. Donec
                ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
                libero, a pharetra augue. Nullam id dolor id nibh ultricies
                vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla
                non metus auctor fringilla.
              </p>

              <div className="flex">
                <div className="flex profiles pl-6">
                  <img className="profile" src={profile1} alt="Profile 1" />
                  <img className="profile" src={profile2} alt="Profile 2" />
                  <img className="profile" src={profile3} alt="Profile 3" />
                  <img className="profile" src={profile4} alt="Profile 4" />
                  <img className="profile" src={profile5} alt="Profile 5" />
                </div>
                <p className="p-4 text-lg">64 major creators</p>
                <div
                  className="pt-4"
                  style={{
                    border: "1px solid black",
                    fontSize: "20px",
                    width: "50px",
                    borderRadius: "50%",
                  }}
                >
                  <CgArrowRight className="arrow text-center ml-3" />
                </div>
              </div>
            </div>
            <img src={Image6} alt="Image6" />
          </div>

          <hr
            style={{
              width: "85%",
              marginLeft: "5%",
              borderTop: "1px solid black",
            }}
          />

          <div className="feature3 flex pb-8 pt-8">
            <img src={Image7} alt="Image7" />
            <div className="flex-row">
              <h4 className="text-black text-3xl p-6">The Boolean Egyptian</h4>
              <p className="text-black text-xl p-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae elit libero, a pharetra augue. Nullam id dolor id nibh
                ultricies vehicula ut id elit. Donec sed odio dui. Donec
                ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
                libero, a pharetra augue. Nullam id dolor id nibh ultricies
                vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla
                non metus auctor fringilla.
              </p>

              <div className="flex">
                <div className="flex profiles pl-6">
                  <img className="profile" src={profile1} alt="Profile 1" />
                  <img className="profile" src={profile2} alt="Profile 2" />
                  <img className="profile" src={profile3} alt="Profile 3" />
                  <img className="profile" src={profile4} alt="Profile 4" />
                  <img className="profile" src={profile5} alt="Profile 5" />
                </div>
                <p className="p-4 text-lg">64 major creators</p>
                <div
                  className="pt-4"
                  style={{
                    border: "1px solid black",
                    fontSize: "20px",
                    width: "50px",
                    borderRadius: "50%",
                  }}
                >
                  <CgArrowRight className="arrow text-center ml-3" />
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End of Featured product */}
      </div>
      {/* end of features */}

      {/* events */}
      <div className="events">
        <h3 className="text-white text-5xl pb-3">
          See Upcoming Auctions and Exhibitions
        </h3>
        <hr
          style={{
            width: "53%",
            marginLeft: "3%",
            marginBottom: "3%",
            borderTop: "1px solid white",
          }}
        />
        <div className="event-info">
          <div className="event">
            <h4 className="text text-white text-4xl">
              <li>MONALISA REDEFINED IN STYLE.</li>
            </h4>

            <div className="flex text-2">
              <p className="text-8xl">01</p>
              <span className="flex-col text-3">
                <p className="p-2 text-lg">Start on : 08:00 GTS . Monday </p>
                <p className="text-xl">
                  GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                  INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                  HIGHEST AND LOWEST BIDS.
                </p>

                <div className="flex pt-4 link-text pr-6">
                  <a href="a" className="underline pt-5 pr-6 text-lg">
                    See more
                  </a>
                  <button className="btn text-lg">Set a reminder</button>
                </div>
              </span>
            </div>
          </div>
        </div>
        {/* progress bar */}
        <div className="bar">
          
        </div>
      </div>
    </div>
  );
};

export default Home;
