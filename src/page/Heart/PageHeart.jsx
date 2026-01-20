import React from "react";
import "./pageHeart.css"

import { useContext } from "react";
import { CartContext } from "../../componet/context/CartContext";
import Prodect from "../../componet/slidePrudect/Prodect";
import Footer from "../../componet/footer/Footer";
function PageHeart() {
  const { heartproved } = useContext(CartContext);
  return (
    <div className="heart">
      <div className="slider-prodect">
        <div className="contaner">
          <div className="text">
            <h2>Your Favorites</h2>
          </div>
          {heartproved == 0 ? (
            <p>No Favorites Products yet.</p>
          ) : (
            <div className="products" >
              {heartproved.map((item) => (
              <Prodect item={item} key={item.id} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageHeart;
