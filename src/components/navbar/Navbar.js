import React from 'react';
import "./Navbar.css";
import { animateScroll } from 'react-scroll/modules';


export const Navbar = () => {

    const scrollToTop = () => {
      animateScroll.scrollToTop();
    }
    return (
      <nav className='navbar'>
          <div className='navbar-logo' onClick={scrollToTop}><p> &lt; <span>ldalejo</span> &#47;&gt; </p></div>
      </nav>
    )
  }
  export default Navbar;