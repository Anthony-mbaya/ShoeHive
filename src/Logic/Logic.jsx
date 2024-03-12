import React, { useState } from "react";
import { createContext } from "react";
import { shoelist } from "../ShoesHolder/ShoeList";

export const AppContext = createContext(null);

const defaultCartCount = () => {
  let count = {};
  for (let x = 1; x < shoelist.length + 1; x++) {
    count[x] = 0;
  }
  return count;
};
export default function Logic(props) {
  const [cart, setCart] = useState(defaultCartCount);

  const totalAmount = () => {
    let sum = 0;

    for (let item in cart) {
      if (cart[item] > 0) {
        let shoeDetails = shoelist.find((shoe) => shoe.id === Number(item));
        sum += cart[item] * shoeDetails.price;
      }
    }
    return sum.toFixed(2);
  };

  const addToCart = (shoeId) => {
    setCart((prevState) => ({ ...prevState, [shoeId]: prevState[shoeId] + 1 }));
  };
  const removeFromCart = (shoeId) => {
    setCart((prevState) => ({ ...prevState, [shoeId]: prevState[shoeId] - 1 }));
  };
  const updateCart = (newAmount, shoeId) => {
    setCart((prevState) => ({ ...prevState, [shoeId]: newAmount }));
  };

  const contextValues = {
    cart,
    totalAmount,
    addToCart,
    removeFromCart,
    updateCart,
  };

  return (
    <AppContext.Provider value={contextValues}>
      {props.children}
    </AppContext.Provider>
  );
}
