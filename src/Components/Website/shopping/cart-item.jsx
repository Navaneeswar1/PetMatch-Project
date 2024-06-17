import { useContext } from 'react'
import { ShopContext } from '../shopping/shop-context'

export const CartItem = (props) => {
  const { Id, Name, ActualPrice, Image, DiscountedPrice } = props.data
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext)

  return (
    <div className='cartItem'>
      <img src={Image} alt='Product' />
      <div className='description'>
        <p>
          <b>{Name}</b>
        </p>
        <p>Rs.{ActualPrice}</p>
        <div className='countHandler'>
          <button onClick={() => removeFromCart(Id)}> - </button>
          <input
            value={cartItems[Id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), Id)}
          />
          <button onClick={() => addToCart(Id)}> + </button>
        </div>
      </div>
    </div>
  )
}

// import { useContext } from "react";
// import { ShopContext } from "../shopping/shop-context";

// export const CartItem = (props) => {
//   const { id, productName, price, productImage } = props.data;
//   const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
//     useContext(ShopContext);

//   return (
//     <div className="cartItem">
//       <img src={productImage} />
//       <div className="description">
//         <p>
//           <b>{productName}</b>
//         </p>
//         <p>Rs.{price}</p>
//         <div className="countHandler">
//           <button onClick={() => removeFromCart(id)}> - </button>
//           <input
//             value={cartItems[id]}
//             onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
//           />
//           <button onClick={() => addToCart(id)}> + </button>
//         </div>
//       </div>
//     </div>
//   );
// };


// import { useContext } from "react";
// import { ShopContext } from "../shopping/shop-context";

// export const CartItem = (props) => {
//   const { id, productName, price, productImage } = props.data;
//   const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
//     useContext(ShopContext);

//   return (
//     <div className="cartItem">
//       <img src={productImage} />
//       <div className="description">
//         <p>
//           <b>{productName}</b>
//         </p>
//         <p>Rs.{price}</p>
//         <div className="countHandler">
//           <button onClick={() => removeFromCart(id)}> - </button>
//           <input
//             value={cartItems[id]}
//             onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
//           />
//           <button onClick={() => addToCart(id)}> + </button>
//         </div>
//       </div>
//     </div>
//   );
// };
