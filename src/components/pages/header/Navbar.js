import React from 'react';
import './Navbar.css'


function Navbar({ currentPage, handlePageChange }) {
    return (
      <header class ="header">
        <a href= "#" class="logo"> My Portfolio </a>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a
            href="#About"
            onClick={() => handlePageChange('About')}
           
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}
            
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Resume"
            onClick={() => handlePageChange('Resume')}
            
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Contact"
            onClick={() => handlePageChange('Contact')}
            
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
    
    </header>
    )
  }
  
  export default Navbar;
  


