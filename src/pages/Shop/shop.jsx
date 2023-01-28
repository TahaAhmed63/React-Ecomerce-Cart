import React from 'react';
import{ PRODUCT } from "../../product";
import {Product} from "./product";
import "./shop.css";



export const Shop = () => {
  return (
  <div className="shopTitle"><div>
    <h1>Shop as you love</h1>
    </div>
    <div className="products">
    {PRODUCT.map((product)=>
    <Product data={product} />
    )}
    </div>
    
    </div>
  )
}
