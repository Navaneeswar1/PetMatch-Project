// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaUser, FaBook, FaQuestion, FaShoppingBag, FaChevronRight, FaShoppingCart } from 'react-icons/fa';
// import image1 from '../assets/shopping.jpg';
// import image2 from '../assets/Shopping/2.jpg';
// import image3 from '../assets/Shopping/3.jpg';
// import image4 from '../assets/Shopping/4.jpg';
// import image5 from '../assets/Shopping/5.jpg';
// import dog from '../assets/dog-img.jpg';

// const MainPage = () => {


//   return (
//     <div>
//       <div className="header">
//         <div className="nav-links">
//           <Link to="/blog" className="icon-button">
//             <FaBook size={30} />
//             <span>Blog</span>
//           </Link>
//           <Link to="/faq" className="icon-button">
//             <FaQuestion size={30} />
//             <span>FAQ</span>
//           </Link>
//           <Link to="/shopping" className="icon-button">
//             <FaShoppingBag size={30} />
//             <span>Shopping</span>
//           </Link>
//           <Link to="/cart" className="icon-button">
//             <FaShoppingCart size={30} />
//             <span>Cart</span>
//           </Link>
//           <Link to="/login" className="icon-button">
//             <FaUser size={30} />
//             <span>Login</span>
//           </Link>
//         </div>
//       </div>


           
// <section id="title" class="gradient-background">

// <div class="container col-xxl-8 px-4 pt-5">
//   <div class="row flex-lg-row-reverse align-items-center g-5 pt-5">
//     <div class="col-10 col-sm-8 col-lg-6">
//       <img src={dog} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" height="200"
//         loading="lazy"/>
//     </div>
//     <div class="col-lg-6">
//       <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Meet new and interesting dogs .</h1>

//       <div class="d-grid gap-2 d-md-flex justify-content-md-start">
//       </div>
//     </div>
//   </div>
// </div>
// </section>
// </div>
//   );
// };

// export default MainPage;












//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
//   const photos = [image1, image2, image3,image4,image5];

//   const handleNextClick = () => {
//     setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
//   };

  
//       <div className="main-content">
//          <Link to="/shopping">
//           <img
//             src={photos[currentPhotoIndex]}
//             alt={`Couple with Pets ${currentPhotoIndex + 1}`}
//             className="main-photo"
//           />
//         </Link> 
//          <button onClick={handleNextClick} className="next-button">
//           <FaChevronRight />
//         </button> *
//       </div> 