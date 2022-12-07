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
import model from "../assets/images/homepage/model.png";
import { RxEnvelopeClosed } from "react-icons/rx";
import { MdOutlineLocationOn } from "react-icons/md";
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

        <section className="flex-row">
          {/* bar */}
          <div class="progress mt-6">
            <div class="color"></div>
          </div>

          {/* nav buttons */}
          <div className="flex nav-btns justify-end">
            <button
              className="btn text-sm"
              style={{ borderRadius: "50%", width: "50px" }}
            >
              &#60;
            </button>
            <button
              className="btn text-sm"
              style={{ borderRadius: "50%", width: "50px" }}
            >
              &#62;
            </button>
          </div>
        </section>
      </div>
      {/* End of events */}

      {/* Links */}
      <section className="links mt-16 pt-16 pb-16 mb-16">
        <hr style={{ border: "0.5px solid #333333" }} />

        <div className="flex p-10">
          <h2 className="text-4xl">Export Marketplace</h2>
          <CgArrowRight
            className="text-6xl link-arrow"
            style={{ color: " #4693ED" }}
          />
        </div>

        <hr style={{ border: "0.5px solid #333333" }} />

        <div className="flex p-10">
          <h2 className="text-4xl">See Auctions</h2>
          <CgArrowRight
            className="text-6xl link-arrow-2 text-end"
            style={{ color: " #4693ED" }}
          />
        </div>
        <hr style={{ border: "0.5px solid #333333" }} />
      </section>

      {/* End of links */}

      {/* Anothwr section */}
      <section className="bg-grey p-10 picture">
        <h2 className="text-5xl font-extrabold">TOP CREATORS OF THE WEEK</h2>
        <div className="model">
          <img className="model-img" src={model} alt="model" />
          <div class="progress bar mt-6">
            <div class="color"></div>
          </div>

          <ul className="text-black list-item text-5xl">
            <li>Editorials</li>
            <li>Fashion</li>
            <li>Lifestyle</li>
            <li>Blueprint</li>
          </ul>

          <p className="mt-16 pt-16 text-4xl text-black">
            “Everything always looked better in black and white. Everything
            always as if it were the first time; there’s always more people in a
            black and white photograph. It just makes it seem that there were
            more people at a gig, more people at a football match, than with
            colour photography. Everything looks more exciting.”– Jack Lowden
          </p>
          <p className="text-8xl num font-extrabold text-center mt-16 pt-16 ml-16 pl-8 text-black">
            1985
          </p>
        </div>
      </section>
      {/* end of section */}

      {/* Newsetter */}
      <section
        className="newsletter text-center mt-16 pt-16 ml-16 pb-14 mb-16"
        style={{ border: "1px solid #333333", width: "90%" }}
      >
        <div className="flex flex-col">
          <h3 className="text-5xl">Newsletter</h3>
          <h5 className="text-3xl pt-6">
            Subscribe to get daily updates on new drops & exciting deals
          </h5>
          <input
            className="uppercase"
            type="email"
            placeholder="Enter your email"
          />
        </div>
      </section>
      {/* End of Newsletter */}

      {/* Footer */}
      <footer className="footer flex m-16">
        <div className="flex">
          <h1 className="logo font-bold text-8xl text-black uppercase p-10">
            Artsy.
          </h1>
          <div className="flex">
            <div className="">
              <ul className="list-item text-3xl">
                <li>Home</li>
                <li>Marketplace</li>
                <li>Auctions</li>
                <li>Drops</li>
              </ul>
            </div>
            <div className="pl-10 ml-10">
              <ul className="flex-col list-item text-3xl">
                <li>Blog</li>
                <li>Wallets</li>
                <li>Rates</li>
                <li>Highbids</li>
              </ul>
            </div>
            <div className="">
              <ul className="list-item text-3xl">
                <li className="flex-row">
                  <RxEnvelopeClosed /> artsystudios@gmail.com
                </li>
                <li className="flex-row"><MdOutlineLocationOn /> Lagos,Nigeria</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* End of Footer */}
    </div>
  );
};

export default Home;
