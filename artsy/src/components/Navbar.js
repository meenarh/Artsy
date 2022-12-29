import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      {/* Navbar starts */}
      <nav className="flex flex-row justify-between text-center p-5 md:20 lg:28">
          <RxHamburgerMenu
            className="menu md:hidden cursor-pointer"
            onClick={() => {
              setShow(true);
            }}
          />

        {show && (
          <>
            <div className="absolute top-0 left-0 p-5 bg-white z-1 h-full w-full">
              <header className="flex flex-row justify-between">
                <h1 className="logo font-bold text-2xl md:text-5xl text-black uppercase">
                  Artsy.
                </h1>
                <button
                  onClick={() => {
              setShow(false);
            }}
                >
                  <GrClose />
                </button>
              </header>

              <div className="links list-none text-left mt-10 gap-10 text-2xl flex flex-col">
                <Link to="/">Home</Link>
                <Link to="/market">Marketplace</Link>
                <Link to="/auction">Auction</Link>
                <Link to="/drop">Drop</Link>
              </div>
            </div>
          </>
        )}

        <h1 className="logo font-bold text-2xl md:text-5xl text-black uppercase">
          Artsy.
        </h1>

        <div className="links list-none text-2xl flex flex-1 bl-16 hidden md:block">
          <Link to="/">Home</Link>
          <Link to="/market">Marketplace</Link>
          <Link to="/auction">Auction</Link>
          <Link to="/drop">Drop</Link>
        </div>

        <div className="icons flex text-2xl ">
          <div className="search pl-16">
            <BiSearch />
          </div>
          <div className="cart pl-6">
            <AiOutlineShoppingCart />
          </div>
          <div className="notifications pl-6 hidden md:inline-block">
            <IoMdNotificationsOutline />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
