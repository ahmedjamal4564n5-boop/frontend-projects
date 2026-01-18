/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { BiSolidDownArrow } from "react-icons/bi";
import { Link, useLocation } from "react-router";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import "./Header.css";

const Navberlink = [
  { title: "Home", link: "/" },
  { title: "About", link: "/About" },
  { title: "Accsserois", link: "/Accsserois" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];
function BoHeader() {
  const Location = useLocation();
  const [categories, setCategorie] = useState([]);
  const [daisbly, setDdaisbly] = useState({ display: "none" });
  const [daisblylink, setDdaisblylink] = useState({ display: "none" });

  const [userstat, setUserStat] = useState(null);
  
  useEffect(()=>{
    setDdaisbly({display: "none"} )
    setDdaisblylink({display: "none"} )
  },[Location])
  useEffect(() => {
    const storjuser = JSON.parse(localStorage.getItem("currentUser"));
    setUserStat(storjuser);
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((date) => setCategorie(date));
  }, []);
  function handlStyle() {
    setDdaisbly((per) =>
      per.display === "none" ? { display: "flex" } : { display: "none" }
      
    );
  }
  function handlLinks() {
    setDdaisblylink((per) =>
      per.display === "none" ? { display: "flex" } : { display: "none" }
    );
    
  }
  const firstLetter = userstat
    ? (userstat.FirstName || userstat.email).charAt(0).toUpperCase()
    : "";

  return (
    <div className="bo-header">
      <div className="contaner">
        <div className="navber">
          <div className="lift-navber">
            <div className="lft">
              <HiMiniBars3 onClick={handlLinks} className="min"/>
              <p onClick={handlStyle}>Browser Category</p>
              <BiSolidDownArrow onClick={handlStyle} />
            </div>
            <div className=" daisblyli" style={daisblylink}>
              {Navberlink.map((item) => (
                <li key={item.link} className={Location.pathname === item.link ? "active" : ""}>
                  <Link className="lai" to={item.link}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </div>
            <div className="categories" style={daisbly}>
              {categories.map((categorie) => (
                <Link  key={categorie.slug} to={`category/${categorie.slug}`}>
                  {categorie.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="end-icon">
          {userstat ? (
            <Link to="/profile" className="avatar">
              {firstLetter}
            </Link>
          ) : (
            <Link className="log" to="/login">
              Login <PiSignInBold />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default BoHeader;
