import React,{useContext} from 'react';
import{PRODUCT} from "../../product";
import { ShopContext } from '../../context/shopcontext';
import {CartItem} from "./cart-Item";
import "./cart.css"
import { useNavigate } from 'react-router-dom';
export const Cart = () => {
  const{cartItem,getTotalCartAmount}=useContext(ShopContext)
  const totalAmount=getTotalCartAmount()
const navigate=useNavigate()
  return (
  <div className="CartName">
    <div><h1>Your Cart Item</h1></div>
 <div className="CartItem">
  {PRODUCT.map((Product)=>{
   if(cartItem[Product.id]!==0){
    return <CartItem data={Product}/>
   }
  })}
 </div>
 {totalAmount>0?(
 <div className="checkout">

  <p>subtotal: ${totalAmount}</p>
  <button onClick={()=>navigate("/")}>Continue Shopping</button>
  <button>Checkout</button>
 </div>
):(
  <h1>Your Cart is empty</h1>
) }
  </div>
  )
}
