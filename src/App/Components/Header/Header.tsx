// Header.tsx

import React from 'react';
import "./Header.css";
import logo_light from "./../../../assets/images/Header/logo-black.png";
import logo_dark from "./../../../assets/images/Header/logo-white.png";
// import search_icon_light from "./../../../assets/images/Header/search-w.png";
import search_icon_dark from "./../../../assets/images/Header/search-b.png";
import toggle_light from "./../../../assets/images/Header/night.png";
import toggle_dark from "./../../../assets/images/Header/day.png";

interface HeaderProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export function Header({ theme, setTheme }: HeaderProps) {
  const toggle_mode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  React.useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  React.useEffect(() => {
    const container = document.querySelector('.container');
    if (container) {
      container.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  return (
    <header className="header">
      <img className="logo" src={theme === 'light' ? logo_light : logo_dark} alt="" />
      <ul className='menu'>
        <li><a href="">Home</a></li>
        <li><a href="">Products</a></li>
        <li><a href="">About</a></li>
      </ul>

      <div className="Searchbox">
        <input type="text" placeholder="Search" />
        <img src={theme === 'light' ? search_icon_dark : search_icon_dark} alt="" />
      </div>

      <img onClick={toggle_mode} className="toggleTheme" src={theme === 'light' ? toggle_light : toggle_dark} alt="" />
    </header>
  );
}
