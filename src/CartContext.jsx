import React, { createContext, useContext, useState } from 'react'

const CartContext=createContext();

export const CartProvider=({children})=>{

    const [cart ,setCart]=useState(0);
    const [data,setData]=useState([]);
    const addToCart=(item)=>{
        setCart(prev=>prev+1);
        setData(prev=>[...prev,item]);
    }

    const removeFromCart=(item)=>{
        setData(prev=>prev.filter((prev)=>prev.name !=item.name || prev.category !==item.category));
        setCart(prev=>prev >0 ? prev-1 :0);
    }
    const removeAll=()=>{
        setData([]);
        setCart(0);
    }
    return (
        <CartContext.Provider value={{cart ,addToCart,removeFromCart,data,removeAll}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart=()=>useContext(CartContext)