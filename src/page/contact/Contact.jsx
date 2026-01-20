import React from "react";
import "./contect.css";
import Footer from "../../componet/footer/Footer";
function Contact() {
  return (
    <div className="contect">
      <div className="contaner">
        <div className="tit">
          <h1>Contact US</h1>
        </div>
        <form action="">
          <div>
            <label for="name">Name</label>
            <input type="text" placeholder="Enter your name" id="name" />
          </div>
          <div>
            <label for="email">email</label>
            <input type="email" placeholder="Enter your name" id="name" />
          </div>
          <div>
            {" "}
            <label for="Message">Message</label>
            <textarea id="Message" placeholder="Enter your message"></textarea>
          </div>
          <button>Send</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
