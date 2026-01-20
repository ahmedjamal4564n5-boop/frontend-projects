import React, { useContext } from "react";
import { Link } from "react-router";
import logo from "../../../img/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

import "./Header.css";
import { CartContext } from "../context/CartContext";
import Search from "./Search";

function TopHeader() {
  const { cartproved } = useContext(CartContext);
  const { heartproved } = useContext(CartContext);

  return (
    <div className="tp-header">
      <div className="contaner">
        <Link className="imgelogo" to="/">
          <img src={logo} alt="" />
        </Link>
        <Search />
        <div className="header-icon">
          <Link to="/heart" className="icon">
            <FaRegHeart />
            <span className="count">{heartproved.length}</span>
          </Link>
          <div className="icon">
            <Link to="/cart">
              <TiShoppingCart />
              <span className="count">{cartproved.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
