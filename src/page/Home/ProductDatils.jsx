/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaShare, FaStar } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router";
import "./productDatelis.css";
import { GiShoppingCart } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import SlideProdect from "../../componet/slidePrudect/SlideProdect";
import ProductDatelisLoding from "./ProductDatelisLoding";
import toast from "react-hot-toast";
import { CartContext } from "../../componet/context/CartContext";

function ProductDatils() {
  const [productId, setProductId] = useState(null);
  const [lodeingid, setLodeingid] = useState(true);
  const [catogry, setCatogry] = useState([]);
  const [lodingcatogry, setLodingCatogry] = useState(true);
  const { cartproved, addCrat ,heartproved,addHeart,removeClick} = useContext(CartContext);
  const isCart = cartproved.some((i) => i.id === productId?.id);
    const isHeart = heartproved.some((i) => i.id === productId?.id)

    const navigate = useNavigate()


  const handlAddCart = () => {
    addCrat(productId);

    toast.success(
      <div className="successCart">
        <img src={productId.images[0]} alt=""></img>
        <div className="head">
          <strong>{productId.title}</strong>
          added to Cart
          <div className="btn" onClick={() => navigate("/cart")}>
            View Cart
          </div>
        </div>
      </div>,
      { duration: 2500 }
    );
  };
  const { id } = useParams();
  useEffect(() => {
    const faichtProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const date = await res.json();
        setProductId(date);
        setLodeingid(false);
      } catch (error) {
        console.log(error);
      }
    };
    faichtProduct();
  }, [id]);

  useEffect(() => {
    if (!productId) return;
    fetch(`https://dummyjson.com/products/category/${productId.category}`)
      .then((res) => res.json())
      .then((date) => {
        setCatogry(date.products);
      })
      .catch((error) => console.log(error))
      .finally(() => setLodingCatogry(false));
  }, [productId?.category]);

  const handlAddHeart = () => {
    addHeart(productId);
    if(isHeart){
        removeClick(productId.id)
        toast.error(
          <div>{productId.title} Remova from Heart</div>
        )
    }else{
      toast.success(
      <div className="successCart">
        <div className="head">
          <strong>{productId.title}  added to Heart</strong>
        
        </div>
      </div>,
      { duration: 2500 }
    );
    }
  }

  if (lodeingid) return <ProductDatelisLoding />;
  if (!productId) return <p>Product Not Fonide</p>;

  return (
    <div>
      <div className="prodctes">
        <div className="contaner">
          <div className="imge">
            <div className="lg-imge">
              <img id="im" src={productId.images[0]} alt={productId.title} />
            </div>
            <div className="sm-imges">
              {productId.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={productId.title}
                  onClick={() => (document.getElementById("im").src = img)}
                />
              ))}
            </div>
          </div>
          <div className="text-catogry">
            <h1>{productId.title}</h1>
            <div className="fastar">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <h2>${productId.price}</h2>
            <h4>
              Availability : <span>{productId.availabilityStatus}</span>
            </h4>
            <h4>
              Brand : <span>{productId.brand}</span>
            </h4>
            <p> {productId.description} </p>
            <span className="sp">
              Hurry Up! Only{" "}
              <span>{productId.stock} Products lift in stock </span>
            </span>
            <button onClick={handlAddCart} className={`btn ${isCart  ? "to-car" : " "}`}>
              {isCart ? "item to cart" : "Add to cart"}  <GiShoppingCart />
            </button>
            <div className="icon">
              <span className={` ${isHeart ? "to-heart" : " "}`} onClick={handlAddHeart}>
                <CiHeart />
              </span>
              <span>
                <FaShare />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="catogry">
        {lodingcatogry ? (
          <p>loding....</p>
        ) : (
          <SlideProdect
            key={productId.category}
            date={catogry}
            title={productId.category.replace("-", " ")}
          />
        )}
      </div>
    </div>
  );
}

export default ProductDatils;
