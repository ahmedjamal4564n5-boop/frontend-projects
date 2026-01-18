import React, { useContext } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaCartPlus, FaShare } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { CartContext } from "../context/CartContext";
import { BsCheck } from "react-icons/bs";
import toast from "react-hot-toast";

function Prodect({ item }) {
  const navigate = useNavigate()
  const { cartproved, addCrat ,addHeart,heartproved , removeClick} = useContext(CartContext);
  const isCart = cartproved.some((i) => i.id === item.id);
  const isHeart = heartproved.some((i) => i.id === item.id)
  const handlAddCart = () => {
    addCrat(item);

    toast.success(
      <div className="successCart">
        <img src={item.images[0]} alt=""></img>
        <div className="head">
          <strong>{item.title}</strong>
          added to Cart
          <div className="btn" onClick={() => navigate("/cart") } >View Cart</div>
        </div>
      </div>,
      { duration: 2500 }
    );
  };

  const handlAddHeart = () => {
    addHeart(item);
    if(isHeart){
        removeClick(item.id)
        toast.error(
          <div>{item.title} Remova from Heart</div>
        )
    }else{
      toast.success(
      <div className="successCart">
        <div className="head">
          <strong>{item.title}</strong>
          added to Heart
        </div>
      </div>,
      { duration: 2500 }
    );
    }

    
  };

  return (
    <>
      <div className={`product ${isCart  ? "to-car" : " "}`}>
        <Link to={`/products/${item.id}`}>
          <div className="tru-cart">
            {" "}
            <BsCheck /> in cart
          </div>
          <div className="product-imges">
            <img src={item.images[0]} alt="" />
          </div>
          <h4 className="title">{item.title}</h4>
          <div className="fastar">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
        </Link>

        <div className="prace">
          <h3>{item.price} </h3>
          <del>$25</del>
        </div>
        <div className="icon-reat">
          <span className="btn-cart" onClick={handlAddCart}>
            <FaCartPlus />
          </span>
          <span className={` ${isHeart ? 'to-heart' : ' '}`} onClick={handlAddHeart}>
            <FaRegHeart />

          </span>
          <span>
            <FaShare />
          </span>
        </div>
      </div>
    </>
  );
}

export default Prodect;
