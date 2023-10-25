import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Where Every Book Is a New Adventure</h2><br />
                <p className='header-text fs-18 fw-3'> "Welcome to BookWander where we make finding your next favorite book a breeze. We're dedicated to helping you explore the vast world of literature effortlessly. Whether you're in search of a gripping mystery, a heartwarming romance, an informative non-fiction title, or any other genre, our user-friendly platform is your gateway to literary adventures. </p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header