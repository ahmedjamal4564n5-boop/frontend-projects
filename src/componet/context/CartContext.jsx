/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function PrivedContext({ children }) {
  const [cartproved, setCartproved] = useState(() => {
    const saveCart = localStorage.getItem("cartItems");
    return saveCart ? JSON.parse(saveCart) : [];
  });
  const [heartproved, setHeartproved] = useState(() => {
    const saveHeart = localStorage.getItem("heartItems");
    return saveHeart ? JSON.parse(saveHeart) : [];
  });

  const ransertQuality = (id) => {
    setCartproved((prevtitme) =>
      prevtitme.map((item) =>
        item.id === id ? { ...item, quality: item.quality + 1 } : item
      )
    );
  };
  const removeClick = (id) => {
    setHeartproved((prevtitme) => prevtitme.filter((item) => item.id !== id));
  };
  
  const deletClick = (id) => {
    setCartproved((prevtitme) => prevtitme.filter((item) => item.id !== id));
  };
  const ransertQualityMinus = (id) => {
    setCartproved((prevtitme) =>
      prevtitme.map((item) =>
        item.id === id && item.quality !== 1
          ? { ...item, quality: item.quality - 1 }
          : item
      )
    );
  };

  const addCrat = (item) => {
    setCartproved((prevtitme) => [...prevtitme, { ...item, quality: 1 }]);
  };

  const addHeart = (item) => {
    setHeartproved((prev) => {
      if (prev.some((i) => i.id == item.id)) return prev;
      return [...prev, item];
    });
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartproved));
  }, [cartproved]);

  useEffect(() => {
    localStorage.setItem("heartItems", JSON.stringify(heartproved));
  }, [heartproved]);

  return (
    <CartContext.Provider
      value={{
        cartproved,
        heartproved,
        addHeart,
        removeClick,
        addCrat,
        ransertQuality,
        ransertQualityMinus,
        deletClick,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
