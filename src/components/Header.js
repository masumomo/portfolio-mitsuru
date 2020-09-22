import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>増元　充</h1>
      <h1>
        <strong>Mitsuru Masumoto</strong>
      </h1>
      <h1>
        <br />
        Painting artist in Hida.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
