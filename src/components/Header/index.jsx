import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
   const { cartItems } = useSelector((state) => state.cartSlice);
   return (
      <header
         aria-label="Page Header"
         className="p-4 flex items-center justify-between bg-gray-200"
      >
         <Link to="/">
            <span className="text-4xl font-lobster flex items-center gap-2 text-pink-800">
               <AiOutlineShoppingCart />
               ECOMM
            </span>
         </Link>
         <ul className="flex items-center gap-5 mr-10">
            <Link to="/cart">
               <li className="cursor-pointer font-semibold">
                  My Cart {cartItems.length > 0 && `(${cartItems.length})`}
               </li>
            </Link>
            <Link to="/about">
               <li className="cursor-pointer font-semibold">About Us</li>
            </Link>
         </ul>
      </header>
   );
};

export default Header;
