import './shop.css'
import { useContext } from 'react'
import { ShopContext } from '../shopping/shop-context'
import { Product } from './product'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import logo from '../../assets/logo.jpg';



function Shopping() {
  const { products } = useContext(ShopContext)
  return (
    <div className='shop'>
      <section id="title" className="gradient-background">
      <div className='header'>
        <div className='nav-links'>
        
        <div className="logo1">
            <img src={logo} alt="logo" />
            Petmatch
          </div>
          <Link to='/cart' className='icon-button'>
            <FaShoppingCart size={30} />
            <span>Cart</span>
          </Link>
        </div>
      </div>
      </section>
      <div className='shopTitle'>
        <h1>Pet Shop</h1>
      </div>
      <div className='products'>
        {products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  )
}

export default Shopping

// import { PRODUCTS } from "../../../products";
// import { Product } from "./product";
// import { Link } from "react-router-dom";
// import "./shop.css";
// import {FaShoppingCart } from 'react-icons/fa';
// import logo from '../../assets/logo.jpg'

// function Shopping() {
//   return (
    
//     <div className="shop">
//       <section id="title" className="gradient-background">
//       <div className="header">
//         <div className="nav-links">
//         <div className="logo1">
//             <img src={logo} alt="logo" />
//             Petmatch
//           </div>

//        <Link to="/cart" className="icon-button">
//             <FaShoppingCart size={30} />
//             <span>Cart</span>
//           </Link>
//           </div>
//           </div>
//           </section>
//       <div className="shopTitle">
//         <h1>Pet Shop</h1>
//       </div>
//       <div className="products">
//         {PRODUCTS.map((product) => (
//           <Product data={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shopping;