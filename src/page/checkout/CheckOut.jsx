import React, { useContext } from "react";
import "./checkout.css";
import { CartContext } from "../../componet/context/CartContext";
import Footer from "../../componet/footer/Footer";

function CheckOut() {
  
  const { cartproved } = useContext(CartContext);
    const total = cartproved.reduce((acc, item) => acc + item.price*item.quality, 0);

  return (
    <div className="checkout">
      <div className="contaner">
        <div className="tit">
          <h1>Checkout</h1>
        </div>
        <div className="bod">
          <div className="bildeing">
            <div className="head">
              <h2>Billing address</h2>
            </div>
            <form action="">
              <div className="us">
                <div>
                  {" "}
                  <label for="frist">First name</label>
                  <input type="text" id="frist" />
                </div>
                <div>
                  <label for="list">list name</label>
                  <input type="text" id="list" />
                </div>
              </div>
              <label for="email">email</label>
              <input type="email" id="email" placeholder="you@example.com"/>
              <label for="address">address</label>
              <input type="text" id="address" placeholder="1234 Main St"/>
              <label for="address2">address 2</label>
              <input type="text" id="address2" placeholder="Apartment or suite" />
              <label for="number">number</label>
              <input type="text" id="number" placeholder="01 xxxxxxxxx"/>
              <label for="number2">number 2</label>
              <input type="text" id="number2" placeholder="01 xxxxxxxxx"/>
            </form>
            <div className="btnck">
              <button>Continue to checkout</button>
            </div>
          </div>
          <div className="Order-Summary">
            <div className="ord">
              <h2>Order Summary</h2>
            </div>
            <div className="Products">
              <p>
                Products <span>({cartproved.length})</span>
              </p>
            </div>
            <div className="Products">
              <p>Shipping </p>
              <h4>$30</h4>
            </div>
            <div className="Products">
              <h3>Total amount</h3>
              <h4>${total.toFixed(2)}</h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CheckOut;
