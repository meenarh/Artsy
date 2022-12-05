import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="font-serif">
      {/* Navbar starts */}
      <nav className="flex flex-row text-center p-28">
        <h1 className="logo font-bold text-5xl text-black uppercase">
          Artsy.
        </h1>

        <div
          className="links list-none text-2xl flex flex-1 bl-16"
          style={{ paddingLeft: "14rem" }}
        >
              <li className="pr-16" to='/'>Home</li>
              <li className="pr-16" to='/market'>Marketplace</li>
              <li className="pr-16" to='auction'>Auction</li>
              <li className="pr-28" to='drop'>Drop</li>
        </div>

        <div className="icons flex text-2xl ">
          <div className="search pl-16">
            <BiSearch />
          </div>
          <div className="cart pl-6">
            <AiOutlineShoppingCart />
          </div>
          <div className="notifications pl-6">
            <IoMdNotificationsOutline />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
