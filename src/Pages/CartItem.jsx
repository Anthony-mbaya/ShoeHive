import React from "react";
import { useContext } from "react";
import { AppContext } from "../Logic/Logic";

export default function CartItem(props) {
  const { id, shoeName, price, image } = props.cartData;
  const { cart, addToCart, removeFromCart, updateCart } =
    useContext(AppContext);
  return (
    <div className="cart-display"> 
      <img src={image} alt={shoeName} className="cart-image" /> 
      <h2>{shoeName}</h2>
      <p>Price:<span className="cart-price"> ${price}</span></p>
      <div className="cart-buttons">
      <button onClick={() => addToCart(id)}> + </button>
      <input
        value={cart[id]}
        onChange={(e) => updateCart(Number(e.target.value), id)}
        className="w-[80%] border-4 py-1 font-bold text-lg outline-none text-center "
      />
      <button onClick={() => removeFromCart(id)}> - </button>
      </div> 
    </div>
  );
}
