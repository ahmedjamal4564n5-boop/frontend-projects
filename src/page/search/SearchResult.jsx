import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./searchResult.css";
import Prodect from "../../componet/slidePrudect/Prodect";
function SearchResult() {
  const [result, setResult] = useState([]);
  const [lodeing, setLodeing] = useState(true);
  const query = new URLSearchParams(useLocation().search).get("query");
  console.log(query);

  useEffect(() => {
    const feachResult = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`,
        );
        const data = await res.json();
        setResult(data.products || []);
      } catch (error) {
        console.error("Search error: " + error);
      } finally {
        setLodeing(false);
      }
    };
    if (query) feachResult();
  }, [query]);

  return (
    <div className="search">
      {lodeing ? (
        <p>lodeing....</p>
      ) : result.length > 0 ? (
        <div className="contaner">
          <div className="text">
            <h2>Result for : {query}</h2>
          </div>
          <div className="prodect">
            {result.map((item, index) => (
              <Prodect item={item} key={index} />
            ))}
          </div>
        </div>
      ) : (
        <div className="contaner">
          <p>No Result found.</p>
        </div>
      )}
    </div>
  );
}

export default SearchResult;
