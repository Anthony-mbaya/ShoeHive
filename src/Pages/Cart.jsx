import React from "react";
import { shoelist } from "../ShoesHolder/ShoeList";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Logic/Logic";
import CartItem from "./CartItem";

export const Cart = () => {
  const { cart, totalAmount } = useContext(AppContext);
  const navigate = useNavigate();
  const cost = totalAmount();

  return (
    
    <div>
    
    <div className="cart-container">
    
      {shoelist.map((shoeInCart) => {
        if (cart[shoeInCart.id] !== 0) {
          return <CartItem cartData={shoeInCart} />;
        }
      })} 
      </div>
      <div className="cost-details">
      <hr />
      {cost > 0 ? (
        <div className="totals">
          <span>Total Cost: {cost}</span>
          <button className="continue" onClick={() => navigate("/")}>Continue Shop</button>
          <button className="checkout">Checkout</button>
        </div>
      ) : (
        <p className="text-red-500">Cart Items not found</p>
      )}
    
    </div>
    </div>
  );
};
