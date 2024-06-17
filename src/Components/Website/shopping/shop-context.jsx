import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const ShopContext = createContext(null)

const getDefaultCart = (products) => {
  console.log(products)
  let cart = {}
  for (let i = 1; i <= products.length; i++) {
    cart[i] = 0
  }
  console.log(cart)
  return cart
}
export const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://localhost:44375/api/test/GetAllProducts'
        )
        setProducts(response.data.Listproducts)
        setCartItems(getDefaultCart(response.data.Listproducts))
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }))
  }

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      console.log(item)
      console.log(cartItems[item])
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.Id === Number(item))
        totalAmount += cartItems[item] * itemInfo.ActualPrice
      }
    }
    return totalAmount
  }

  const contextValue = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

// import { createContext, useState } from "react";
// import { PRODUCTS } from "../../../products";

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 1; i <= PRODUCTS.length; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };

// export const ShopContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState(getDefaultCart());

//   const addToCart = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: prev[itemId] + 1,
//     }));
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: prev[itemId] - 1,
//     }));
//   };

//   const updateCartItemCount = (newAmount, itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
//         totalAmount += cartItems[item] * itemInfo.price;
//       }
//     }
//     return totalAmount;
//   };

//   const contextValue = {
//     cartItems,
//     addToCart,
//     removeFromCart,
//     updateCartItemCount,
//     getTotalCartAmount,
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };
