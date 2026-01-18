import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Prodect from "../../../componet/slidePrudect/Prodect";
import './categoriePage.css'

function CategoriePage() {
  const { category } = useParams();
  const [categoryProdect, setCategoryProdect] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`).then((res) =>
      res.json().then((date) => {
        setCategoryProdect(date.products);
      })
    );
  }, [category]);
  return (
    <div className="categopage">
      <div className="contaner">
        <div className="text">
          <h2>{category}</h2>
          <p>Add bestseliing products To Weekly line up</p>
        </div>
        <div className="prodect">
          {categoryProdect.map((item, index) => (
            <Prodect item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriePage;
