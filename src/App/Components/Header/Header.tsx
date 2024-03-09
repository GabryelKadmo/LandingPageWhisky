// Header.tsx

// import React from 'react';
import "./Header.css";
// import logo_light from "./../../../assets/images/Header/logo-black.png";
import logo_dark from "./../../../assets/images/HeaderImgs/logo-white.png";

export function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo_dark} alt="" />
      <ul className='menu'>
        <li><a href="/">Home</a></li>
        <li><a href="/Sobre">Sobre</a></li>
        {/* <li><a href="/Produtos">Products</a></li> */}
      </ul>
    </header>
  );
}
