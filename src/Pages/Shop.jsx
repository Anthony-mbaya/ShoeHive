import React from "react";
import { shoelist } from "../ShoesHolder/ShoeList";
import { ShoeDisp } from "./ShopDisp";

export const Shop = () => {
  return (
    <div className="main-product-container">
      {shoelist.map((shoe) => (
        <ShoeDisp shoedata={shoe} />
      ))}
    </div>
  );
};
