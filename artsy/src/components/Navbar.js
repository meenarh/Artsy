import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import MdNotificationsNone  from "react-icons/io";

const Navbar = () => {
  return (
    <div>
      {/* Navbar starts */}
      <nav className="flex flex-row text-center p-28 font-[Satoshi]">
        <h1 className="logo font-bold text-3xl text-black uppercase font-[Satoshi]">Artsy.</h1>

        <ul className="links list-none text-lg flex flex-1 bl-16 font-[Satoshi]" style={{paddingLeft: "14rem"}}>
          <li className="pr-16">Home</li>
          <li className="pr-16">Marketplace</li>
          <li className="pr-16">Auction</li>
          <li className="pr-28">Drop</li>
        </ul>

        <div className="icons flex text-2xl ">
          <div className="search pl-16">
            <BiSearch />
          </div>
          <div className="cart pl-6">
            <BsCart2 />
          </div>
          <div className="notifications pl-6">
            {/* <MdNotificationsNone /> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
