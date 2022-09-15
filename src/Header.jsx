import React from 'react'
import "./HeaderCss.css"
import Avatar from "./Images/Avatar.jpg"
import GitHub from "./Images/GitHub1.png"
import Instagram from "./Images/Instagram.png"
import Telegram from "./Images/Telegram.png"
import TikTok from "./Images/TikTok.png"


const Header = () => {
  return (
    <div className='header'>
        <div className='avatar'>
            <img src={Avatar} alt="#" />
        </div>
        <div className='menu'>
          <a href="#"><div className='home-div'>
           <p>Home</p> 
           <span></span> 
          </div></a>
           <a href='#' className='menu-text'>Projects</a> 
           <a href='#' className='menu-text'>About</a> 
           <a href='#' className='menu-text'>Setting</a> 
        </div>
        <div className='social-logos'>
            <a href="https://github.com/ATOVRA" target="_blank"><img src={GitHub} alt="#" className='social'/></a>
            <a href="https://www.instagram.com/atovra/" target="_blank"><img src={Instagram} alt="#" className='social'/></a>
            <a href="https://t.me/+yu0ukxuPOChmNzYy" target="_blank"><img src={Telegram} alt="#" className='social'/></a>
            <a href="#"><img src={TikTok} alt="#"  className='social'/></a>
        </div>
    </div>
  )
}
export default Header;