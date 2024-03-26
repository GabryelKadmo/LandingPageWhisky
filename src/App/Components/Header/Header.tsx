import "./Header.css";
import logo_dark from "./../../../assets/images/HeaderImgs/logo-white.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={logo_dark} alt="" />
      </Link>
      <ul className="menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/sobre">Sobre</a>
        </li>
      </ul>
    </header>
  );
}
