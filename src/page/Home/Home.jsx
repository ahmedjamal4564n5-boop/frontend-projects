import React, { useEffect, useState } from "react";
import Hearoslider from "../../componet/Hearoslider";
import "./Home.css";
import SlideProdect from "../../componet/slidePrudect/SlideProdect";
import Footer from "../../componet/footer/Footer";
const NavCatogre = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "mens-watches",
  "tablets",
  "sunglasses",
  "sports-accessories",
  "skin-care",
  "womens-dresses",
  "womens-jewellery",
];

function Home() {
  const [products, setProducts] = useState({});
  const [lodeing, setLodeing] = useState(true);

  useEffect(() => {
    const catogreyProduct = async () => {
      try {
        const results = await Promise.all(
          NavCatogre.map(async (catogre) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${catogre}`
            );
            const date = await res.json();
            return { [catogre]: date.products };
          })
        );
        const productData = Object.assign({}, ...results);
        setProducts(productData);
      } catch (error) {
        console.error("error facheg" + error);
      } finally {
        setLodeing(false);
      }
    };
    catogreyProduct();
  }, []);

  return (
    <div>
      <Hearoslider />

      {lodeing ? (
        <p>lodeing....</p>
      ) : (
        NavCatogre.map((catogre) => (
          <SlideProdect
            key={catogre}
            date={products[catogre]}
            title={catogre.replace("-", " ")}
          />
        ))
      )}
      <Footer />
    </div>
  );
}

export default Home;
