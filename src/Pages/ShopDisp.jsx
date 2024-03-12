import React from "react";
import { useContext } from "react";
import { AppContext } from "../Logic/Logic";

export const ShoeDisp = (props) => {
  const { id, shoeName, price, image } = props.shoedata;
  const { addToCart, cart } = useContext(AppContext);
  const counter = cart[id];
  return (
    <div className="item-display">
      <img src={image} className="shop-image" alt={shoeName} />

      <h4>
        Price: <span className="price">${price}</span>
      </h4>
      <button
        className="cartBtn"
        onClick={() => {
          addToCart(id);
        }}
      >
        Add to Cart {counter > 0 && <span>[ {counter} ]</span>}{" "}
      </button>
    </div>
  );
};
