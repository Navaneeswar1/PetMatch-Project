import { ShopContext } from '../shopping/shop-context'
import { useContext } from 'react'
import { CartItem } from './cart-item'
import './cart.css'

import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { Id, products, cartItems, getTotalCartAmount } =
    useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  console.log(totalAmount)
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {products.map((product) => {
          if (cartItems[product.Id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className='checkout'>
          <p>Subtotal: Rs{totalAmount}</p>
          <button onClick={() => navigate('/shopping')}>
            Continue Shopping
          </button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  )
}

export default Cart

// import { PRODUCTS } from "../../../products";
// import { ShopContext } from "../shopping/shop-context";
// import { useContext } from "react";
// import { CartItem } from "./cart-item";
// import "./cart.css";

// import { useNavigate } from "react-router-dom";

// function Cart(){
//   const { cartItems, getTotalCartAmount } = useContext(ShopContext);
//   const totalAmount = getTotalCartAmount();

//   const navigate = useNavigate();
//   return (
//     <div className="cart ">
//       <div>
//         <h1>Your Cart Items</h1>
//       </div>
//       <div className="cartItems">
//         {PRODUCTS.map((product) => {
//           if (cartItems[product.id] !== 0) {
//             return <CartItem data={product} />;
//           }
//         })}
//       </div>
//       {totalAmount > 0 ? (
//         <div className="checkout">
//           <p>Subtotal: Rs{totalAmount}</p>
//           <button onClick={() => navigate("/shopping")}>Continue Shopping</button>
//           <button>Checkout</button>
//         </div>
//       ) : (
//         <h1>Your Cart is Empty</h1>
//       )}
//     </div>
//   );
// };

// export default Cart;
