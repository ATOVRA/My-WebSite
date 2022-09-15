import React from 'react'
import "./Center.css"
import CoderLogo from "./Images/Coder.png"
import Html from "./Images/Html.png"
import Css from "./Images/Css.png"
import JavaScript from "./Images/Javascript1.png"
import ReactImg from "./Images/React.png"
import Python from "./Images/Python.png"
import GifAnimation from "./Images/Infinity.gif"
import Background1 from "./Images/Background1.1.jpg"



const Center = () => {
  return (
    <div className='center'>
      <div className="container1">
      <img src={Background1} className="background1"/>
        <div className='text-container'>
            <img src={CoderLogo} alt="#" />
            <h1>ATOVRA</h1>
            <p>Full Stack Developer And Social Media Content Creator</p>
        </div>
        <div className='CodeLanguages'>
            <a href="https://www.w3schools.com/html/" target="_blank"><img src={Html} alt="#" className='html-img'/></a>
            <a href="https://css-tricks.com/" target="_blank"><img src={Css} alt="#" className='css-img'/></a>
            <a href="https://www.w3schools.com/js/" target="_blank"><img src={JavaScript} alt="#" className='js-img'/></a>
            <a href="https://reactjs.org/" target="_blank"><img src={ReactImg} alt="#" className='react-img'/></a>
            <a href="https://www.python.org/" target="_blank"><img src={Python} alt="#" className='python-img'/></a>
        </div>
      </div>

      <div className='gifAnimation'>
          {/* <img src={GifAnimation} alt="Gif"style={{width:"80%"}} /> */}
      </div>
    </div>
  )
}
export default Center;