import { useState } from "react";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navmenu">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <Link to="/">
            <img src="/images/M-logo.png" alt="Logo" className="logo-img" />
          </Link>
        </div>

        {/* Hamburger Button */}
        <button class= "hamburger" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Menu Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <NavButton to="/coding" className="nav-coding">CODING</NavButton>
          <NavButton to="/comics" className="nav-comics">COMICS</NavButton>
          <NavButton to="/contact" className="nav-contact">CONTACT</NavButton>
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;