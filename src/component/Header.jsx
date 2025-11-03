import React from 'react'
import image from '../assets/home-img.jpg'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
        <img src={image} alt="logo" />
        <span>My Travel info</span>      
    </header>
  )
}

export default Header
