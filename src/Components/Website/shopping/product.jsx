import { useContext } from 'react'
import { ShopContext } from '../shopping/shop-context'

export const Product = (props) => {
  const { Id, Name, ActualPrice, Image } = props.data
  const { addToCart, cartItems } = useContext(ShopContext)

  const cartItemAmount = cartItems[Id]

  return (
    <div className='product' key={Id}>
      <img src={Image} />
      <div className='description'>
        <p>
          <b>{Name}</b>
        </p>
        <p>Rs.{ActualPrice}</p>
      </div>
      <button className='addToCartBttn' onClick={() => addToCart(Id)}>
        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  )
}

// import { useContext } from "react";
// import { ShopContext } from "../shopping/shop-context"

// export const Product = (props) => {
//   const { id, productName, price, productImage } = props.data;
//   const { addToCart, cartItems } = useContext(ShopContext);

//   const cartItemAmount = cartItems[id];

//   return (
//     <div className="product">
//       <img src={productImage} />
//       <div className="description">
//         <p>
//           <b>{productName}</b>
//         </p>
//         <p>Rs.{price}</p>
//       </div>
//       <button className="addToCartBttn" onClick={() => addToCart(id)}>
//         Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
//       </button>
//     </div>
//   );
// };
