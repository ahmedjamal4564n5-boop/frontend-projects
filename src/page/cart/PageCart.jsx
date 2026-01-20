import React, { useContext } from "react";
import "./pageCart.css";
import { CartContext } from "../../componet/context/CartContext";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router";
import Footer from "../../componet/footer/Footer";
function PageCart() {

  
  const { cartproved,ransertQuality ,ransertQualityMinus ,deletClick} = useContext(CartContext);
  const total = cartproved.reduce((acc, item) => acc + item.price*item.quality, 0);
  return (
    <div className="pagcart">
    <div className="page-cart">
      <div className="cart">
        <h1>Order Summary</h1>
        <div className="items">
          {cartproved.length === 0  ? (
            <p className="undfin">Not Cart Naw</p>
          ) : (
            cartproved.map((item, index) => (
              <div className="item_cart" key={index}>
                <div className="img_cart">
                  <img src={item.images?.[0]} alt="" />
                  <div className="conent">
                    <h4>{item.title}</h4>
                    <p>${(item.price * item.quality).toFixed(2)}</p>
                    <div className="content">
                      <button onClick={()=> ransertQualityMinus(item.id)}>
                        <FaMinus />
                      </button>
                      <p>{item.quality}</p>
                      <button onClick={() => ransertQuality(item.id)}>
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                  <div className="btn-dalet">
                    <button onClick={() => deletClick(item.id)}>
                      <FaTrashCan />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="botten">
          <div className="totel">
            <h2>Total:</h2>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="btn-btn">
            <Link to="/order" className="bo"><button>Place Order</button></Link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default PageCart;
