import React,{createContext,useState} from 'react'
import { CartItem } from '../pages/cart/cart-Item';

import {PRODUCT} from "../product"

export const ShopContext=createContext(null);



const getDefaultcart=()=>{
  let cart={};
  for(let i=1;i<PRODUCT.length+1;i++){
    cart[i]=0
  }
  return cart;
} ;

export const ShopContextprovider = (props) => {
  const [cartItem,setCartItem]=useState(getDefaultcart());

  const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItem){
      if(cartItem[item]>0){
        let iteminfo=PRODUCT.find((product)=>product.id===Number(item))
     
        totalAmount+=cartItem[item]*iteminfo.price
      }
    }
    return totalAmount;
  }

  const addToCart=(itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}));
  }
  const removeFromCart=(itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}));
  }
const updateCartItemCount=(newAmount,itemId)=>{
  setCartItem((prev)=>({...prev,[itemId]:newAmount}))
}

const contextValue={cartItem,addToCart,removeFromCart,updateCartItemCount,getTotalCartAmount}

  return (
 
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
