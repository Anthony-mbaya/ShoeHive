import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartSimple } from "phosphor-react"; 

export const Navbar = () => {
  return (
    <div className="nav"> 
    <h1>TONNY'S SHOE HIVE</h1>
    <div className="navbar flex justify-evenly items-center text-lg">
    <div className="links">
      
      <Link to={"/"} className="hover:text-slate-200">Shop</Link>
      <input type="text" className="search" placeholder="Search for products..." />
      <Link to={"/cart"} className="hover:text-slate-200">
        <ShoppingCartSimple size={32} />
      </Link>
      </div>
      <Link to={"/login"} className="login">Login</Link>
    </div>
    </div>
  );
};
