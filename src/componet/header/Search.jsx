import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggseition, setSuggseition] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const handlSearchClick = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
    setSuggseition([]);
  };

  useEffect(() => {
    const feachsuggseition = async () => {
      if (!searchTerm.trim()) {
        setSuggseition([]);
        return;
      }
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`,
        );
        const data = await res.json();
        setSuggseition(data.products.slice(0, 6) || []);
      } catch (error) {
        console.error("Search error: " + error);
        setSuggseition([]);
      }
    };

    const debonuce = setTimeout(() => {
      feachsuggseition();
    }, 300);
    return () => clearTimeout(debonuce);
  }, [searchTerm]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSuggseition([]);
  },[location]);

  return (
    <div className="Search">
      <form onSubmit={handlSearchClick} className="formsSearch">
        <input
          type="text"
          name="sarch"
          id="sarch"
          placeholder="Search For Products"
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
        />
        <button>
          {" "}
          <FaSearch />{" "}
        </button>
      </form>
      {suggseition.length > 0 ? (
        <ul className="sugges">
          {suggseition.map((item) => (
            <Link to={`/products/${item.id}`}>
              <li key={item.id}>
                <img src={item.images[0]} alt={item.id} />{" "}
                <span>{item.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default Search;
