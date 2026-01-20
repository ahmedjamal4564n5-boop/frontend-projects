import React from "react";
import img from "../../../img/icon.png";
import { FaFacebook, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="contaner">
        <div className="footer1">
          <div className="logo">
            <div className="img">
              <img src={img} alt="" />
              <h1>
                Reda{" "}
                <div>
                  <span>Online</span> <p>Store</p>
                </div>
              </h1>
            </div>
            <p className="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              explicabo!
            </p>
            <div className="icon">
              <div className="icon-ic">
                <FaPhoneAlt />
              </div>
              <div className="icon-ic">
                <FaFacebook />
              </div>
              <div className="icon-ic">
                <FaInstagram />
              </div>
              <div className="icon-ic">
                <BsTwitterX />
              </div>
            </div>
          </div>
          <div className="find">
            <h2>Find It Fast</h2>
            <ul>
              <li>
                <a href="#">Laptops & Computers</a>
              </li>
              <li>
                <a href="#">Snmart phones & Tablets</a>
              </li>
              <li>
                <a href="#">TV & Audio</a>
              </li>
              <li>
                <a href="#">Appliances</a>
              </li>
              <li>
                <a href="#">Jewelry & Watches</a>
              </li>
            </ul>
          </div>
          <div className="find">
            <h2>Customer Service</h2>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Returns & Refunds</a>
              </li>
              <li>
                <a href="#">Shipping Info</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="find">
            <h2>About Us</h2>
            <ul>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press & Media</a>
              </li>
              <li>
                <a href="#">Affiliate Program</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer2">
        <div className="contaner">
          <div className="sol">
            ©<h2 className="col">Reda store.</h2>
            <h2>All Rights Reserved</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
