import React from 'react';
import "./Header.css";
import headerVideo from "../../media/video/headerVideo.mp4";


const Header = () => {
  return (
    <div className="header-container">
        <video className='video' src={headerVideo} autoPlay loop muted/>
        <h1>David Alejo</h1>
        <p>Full Stack Developer</p>
    </div>
  )
}

export default Header;