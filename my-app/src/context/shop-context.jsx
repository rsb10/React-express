import React, { createContext, useState } from "react"
import { PRODUCTS } from "../products"
import Alert from '@mui/material/Alert';

export const ShopContext = createContext(null);
export var lastProductAdded = "test"


const getDefaultCart = () =>{
    let cart = {};
    for (let i =1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    } 
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    
    // this looks like a side effect heavy function. Not sure if react 
    // emphasises on pure functions without side effects. will check later
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        let itemInfo = PRODUCTS.find((product) => product.id === Number(itemId))
        console.log(lastProductAdded)
        lastProductAdded = itemInfo.productName;
        console.log(lastProductAdded)
      };
    
      const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        console.log(lastProductAdded)
      };

      const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId] : newAmount}));
      };

      const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
            totalAmount += cartItems[item] * itemInfo.price
          }
        }

        return totalAmount;
      }

      const getCartCount = () => {
        let cartCount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            cartCount += cartItems[item]
          }
        }
          
        return cartCount;
      }
    

    const contextValue = {
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateCartItemCount,
      getTotalCartAmount,
      getCartCount,
      lastProductAdded
    }

    console.log(cartItems);
    console.log(lastProductAdded)

    return <div className="shopContext">
      <Alert severity="success">{lastProductAdded} successfully added to the cart</Alert> 
      <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    </div>
        
}