import React from 'react';
import Registration from './Components/LoginSignup/Registration';
import Login from './Components/LoginSignup/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPage from './Components/Website/BlogPage';
import Cart from './Components/Website/shopping/Cart.jsx';
import Faq from './Components/Website/FaqSection';
import MainPage from './Components/Website/MainPage';
import Shopping from './Components/Website/shopping/Shopping.jsx';
import Profile from './Components/Website/Profile';
import MatchedProfiles from './Components/LoginSignup/MatchedProfiles';
import AfterloginPage from './Components/Website/AfterloginPage';
import { ShopContextProvider } from './Components/Website/shopping/shop-context.jsx';

function App() {
  return (
    <ShopContextProvider> 
    <Router>
    <Routes>
        {/* <Route path="/mainpage" element={<MainPage/>} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/Afterloginpage" element={<AfterloginPage />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/matchedprofiles" element={<MatchedProfiles />} />
        <Route path="/shopping" element={<Shopping/>} />
        <Route path="/profile" element={<Profile/>} />

    </Routes>
  </Router>
  </ShopContextProvider>
  );
}

export default App;











