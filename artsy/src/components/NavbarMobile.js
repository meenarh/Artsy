import React from 'react'
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {RxHamburgerMenu} from 'react-icons/rx'

const NavbarMobile = () => {
  return (
   <div className="font-serif">
   {/* Navbar starts */}
   <nav className="flex flex-row text-center p-28">
       <button className="menu">
         <RxHamburgerMenu />
       </button>

     <h1 className="logo font-bold text-5xl text-black uppercase">
       Artsy.
     </h1>

     <div className="icons flex text-2xl ">
       <div className="search pl-16">
         <BiSearch />
       </div>
       <div className="cart pl-6">
         <AiOutlineShoppingCart />
       </div>
     </div>

     <div
       className="links list-none text-2xl flex flex-1 bl-16"
       style={{ paddingLeft: "14rem" }}
     >
           <Link className="pr-16" to='/'>Home</Link>
           <Link className="pr-16" to='/market'>Marketplace</Link>
           <Link className="pr-16" to='auction'>Auction</Link>
           <Link className="pr-28" to='drop'>Drop</Link>
     </div>

   </nav>
 </div>
  )
}

export default NavbarMobile