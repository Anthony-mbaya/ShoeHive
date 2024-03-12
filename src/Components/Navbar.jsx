import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartSimple } from "phosphor-react";
import Menubar from "./MenuSvg";

export const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <h1>TONNY'S SHOE HIVE</h1>
      </nav>
      <ul className="links" id="links">
        <li>
          {" "}
          <Link to={"/"} className="hover:text-slate-200">
            Shop
          </Link>
        </li>
        <li>
          {" "}
          <input
            type="text"
            className="search w-44"
            placeholder="Search for products..."
          />{" "}
        </li>
        <li>
          {" "}
          <Link to={"/"} className="about">
            About
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"/"} className="contact">
            Contact
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"/cart"} className="hover:text-slate-200">
            <ShoppingCartSimple size={32} />
          </Link>
        </li>

        <li>
          {" "}
          <Link to={"/login"} className="login">
            Login
          </Link>
        </li>
      </ul>
      <Menubar />
    </header>
  );
};
