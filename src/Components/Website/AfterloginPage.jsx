import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { FaUser, FaBook, FaQuestion, FaShoppingBag, FaChevronRight, FaShoppingCart,FaArrowDown  } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';
import BlogPage from './BlogPage';
import FaqSection from './FaqSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Website/website.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import image1 from '../assets/Shopping/1.webp';
import image2 from '../assets/Shopping/2.webp';
import image3 from '../assets/Shopping/3.webp';
import dog from '../assets/dog-img.jpg';
import logo from '../assets/logo.jpg'

function AfterloginPage() {     
  const location = useLocation();
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const photos = [image1, image2, image3];
  const navigate = useNavigate();

  const handleNextClick = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const data = location.state;

  function HandleMatched() {
    console.log("hii", data.additionalData)
    navigate('/matchedprofiles', { state: data.additionalData });
  }

  function HandleProfile() {
    console.log("hii123", data.userData)
    navigate('/profile', { state: data.userData });
  }

  return (
    <div>
      <section id="title" className="gradient-background">
      <div className="header">
        <div className="nav-links">
        <div className="logo">
            <img src={logo} alt="logo" />
            Petmatch
          </div>
          <Link to="/blog" className="icon-button">
            <FaBook size={30} />
            <span>Blog</span>
          </Link>
          <Link to="/faq" className="icon-button">
            <FaQuestion size={30} />
            <span>FAQ</span>
          </Link>
          <Link to="/shopping" className="icon-button">
            <FaShoppingBag size={30} />
            <span>Shopping</span>
          </Link>
          <Link to="/cart" className="icon-button">
            <FaShoppingCart size={30} />
            <span>Cart</span>
          </Link>
          <button className="button1 icon-button" onClick={HandleProfile}>
            <FaUser size={30} /> <span>My Account</span>
          </button>
        </div>
      </div>
      </section>
      
      <section id="title" className="gradient-background">
        <div className="container col-xxl-8 px-4 pt-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 pt-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src={dog} className="d-block mx-lg-auto dog " alt="Bootstrap Themes"  width="100%" loading="lazy" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Meet new and interesting dogs.</h1>
              <div className="fo text-center">
              <button class="custom-btn btn-12"onClick={HandleMatched}><span>Find Match</span><span>Click Me</span></button>
               
            </div>
                
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              </div>
            </div>
          </div>
        </div>
      </section>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="main-content">
  <Link to="/shopping">
    <img
      src={photos[currentPhotoIndex]}
      alt={`Couple with Pets ${currentPhotoIndex + 1}`}
      className="img-fluid main-photo"
    />
  </Link>
</div>
<div className="text-center">
  <button onClick={handleNextClick} className="btn btn-primary">
    <FaChevronRight /> 
  </button>
</div> 


      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <section id="title" style={{ backgroundColor: 'pink' }}>
        <BlogPage />
        <br></br>
        <br></br>
        <FaqSection />
      </section>

      

      <footer className="bg-dark text-light text-center py-3">
        <p>&copy; Pet Match 2024.</p>
      </footer>

    </div>
  );
}

export default AfterloginPage;


// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { Link,useNavigate   } from 'react-router-dom';
// function AfterloginPage() {
//   const location = useLocation();
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const navigate = useNavigate();
//   // Move showMatchedProfiles to the component's scope
//   const showMatchedProfiles = location.state;
//   function HandleMatched(){
//     navigate('/matchedprofiles', { state: showMatchedProfiles });

//   }
//     return(
//         <>
//         <h1>Cart</h1>
//         <button onClick={HandleMatched()}>Matchedprofiles</button>
//         </>
//     )
// }

// export default AfterloginPage;


      




    {/* <div className="footer foo">
      <button className="button1 " onClick={HandleMatched}>
         <img src={coup} alt='matchmaking'></img>
      </button>
    </div> */}









    {/* <Carousel>

  <Carousel.Item>
    <img src={image1} className="d-block w-100" alt="First slide"  />
  </Carousel.Item>

  <Carousel.Item>
    <img src={image2} className="d-block w-100" alt="Second slide" />
  </Carousel.Item>

  <Carousel.Item>
    <img src={image3} className="d-block w-100" alt="Third slide" />
  </Carousel.Item>

</Carousel> */}
